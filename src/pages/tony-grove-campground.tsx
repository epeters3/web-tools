import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../components/PageLayout";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const CAMPGROUND_ID = "232115";

interface SiteData {
  site: string;
  availabilities: Record<string, string>;
}

interface MonthResponse {
  campsites: Record<
    string,
    { site: string; availabilities: Record<string, string> }
  >;
}

// Fridays–Mondays from today through Aug 20, 2026
function getRelevantDates(): Date[] {
  const today = new Date();
  const start = new Date(
    Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
  );
  const end = new Date(Date.UTC(2026, 7, 20)); // Aug 20, 2026
  const dates: Date[] = [];
  const cur = new Date(start);
  while (cur <= end) {
    const day = cur.getUTCDay(); // 0=Sun,1=Mon,5=Fri,6=Sat
    if (day === 5 || day === 6 || day === 0 || day === 1) {
      dates.push(new Date(cur));
    }
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
  return dates;
}

function toApiKey(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}T00:00:00Z`;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Sort like 007 < 010 < 016 < 016B < 017 < 033
function compareSites(a: string, b: string): number {
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);
  if (numA !== numB) return numA - numB;
  return a.localeCompare(b);
}

// Which months (YYYY-MM-01) overlap our window?
function getMonthStarts(): string[] {
  const today = new Date();
  const months: string[] = [];
  const cursor = new Date(
    Date.UTC(today.getFullYear(), today.getMonth(), 1)
  );
  const endMonth = new Date(Date.UTC(2026, 7, 1)); // Aug 2026
  while (cursor <= endMonth) {
    months.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCMonth(cursor.getUTCMonth() + 1);
  }
  return months;
}

const TonyGrovePage: React.FC<PageProps> = () => {
  const [sites, setSites] = React.useState<SiteData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const monthStarts = getMonthStarts();
    Promise.all(
      monthStarts.map((m) =>
        fetch(
          `https://www.recreation.gov/api/camps/availability/campground/${CAMPGROUND_ID}/month?start_date=${m}T00:00:00.000Z`
        ).then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status} for ${m}`);
          return r.json() as Promise<MonthResponse>;
        })
      )
    )
      .then((responses) => {
        const merged: Record<string, SiteData> = {};
        for (const { campsites } of responses) {
          for (const [id, data] of Object.entries(campsites)) {
            if (!merged[id]) {
              merged[id] = { site: data.site, availabilities: {} };
            }
            Object.assign(merged[id].availabilities, data.availabilities);
          }
        }
        setSites(
          Object.values(merged).sort((a, b) => compareSites(a.site, b.site))
        );
        setLoading(false);
      })
      .catch((err: unknown) => {
        setError(String(err));
        setLoading(false);
      });
  }, []);

  const dates = getRelevantDates();

  return (
    <PageLayout heading="Tony Grove Campground">
      <Typography variant="subtitle1" gutterBottom color="text.secondary">
        Fri–Mon availability · Jun 13 – Aug 20, 2026 · Sites ordered by
        position around the loop
      </Typography>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          Failed to load availability: {error}
        </Typography>
      )}

      {!loading && !error && (
        <>
          <Box sx={{ display: "flex", gap: 2, mb: 1, alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: "#c8e6c9",
                  border: "1px solid #a5d6a7",
                  borderRadius: 0.5,
                }}
              />
              <Typography variant="caption">Available</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: "#ffcdd2",
                  border: "1px solid #ef9a9a",
                  borderRadius: 0.5,
                }}
              />
              <Typography variant="caption">Reserved</Typography>
            </Box>
          </Box>

          <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      minWidth: 100,
                      position: "sticky",
                      left: 0,
                      zIndex: 3,
                      bgcolor: "background.paper",
                    }}
                  >
                    Date
                  </TableCell>
                  {sites.map((s) => (
                    <TableCell
                      key={s.site}
                      align="center"
                      sx={{ fontWeight: "bold", px: 0.5, minWidth: 40 }}
                    >
                      {s.site}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {dates.map((date) => {
                  const key = toApiKey(date);
                  const label = formatDate(date);
                  const isFirstOfWeekend =
                    date.getUTCDay() === 5 || // Friday starts a new weekend
                    (date.getUTCDay() === 6 && // Saturday that has no preceding Friday in range
                      dates.findIndex((d) => d.getTime() === date.getTime()) ===
                        0);
                  return (
                    <TableRow
                      key={key}
                      sx={
                        isFirstOfWeekend
                          ? { borderTop: "2px solid", borderColor: "divider" }
                          : {}
                      }
                    >
                      <TableCell
                        sx={{
                          whiteSpace: "nowrap",
                          position: "sticky",
                          left: 0,
                          bgcolor: "background.paper",
                          zIndex: 1,
                          fontWeight: isFirstOfWeekend ? "bold" : "normal",
                        }}
                      >
                        {label}
                      </TableCell>
                      {sites.map((s) => {
                        const status = s.availabilities[key];
                        const isAvailable = status === "Available";
                        return (
                          <TableCell
                            key={s.site}
                            align="center"
                            title={status ?? "No data"}
                            sx={{
                              bgcolor: !status
                                ? "grey.100"
                                : isAvailable
                                ? "#c8e6c9"
                                : "#ffcdd2",
                              p: 0.25,
                              fontSize: "0.7rem",
                              lineHeight: 1,
                              color: !status
                                ? "text.disabled"
                                : isAvailable
                                ? "#1b5e20"
                                : "#b71c1c",
                            }}
                          >
                            {!status ? "–" : isAvailable ? "✓" : "✗"}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </PageLayout>
  );
};

export default TonyGrovePage;

export const Head: HeadFC = () => (
  <CommonHead title="Tony Grove Campground" />
);
