import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CommonHead, PageLayout } from "../components/PageLayout";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import {
  AccessTime,
  FitnessCenter,
  DataObject,
  Fingerprint,
  TextFields,
  Speed,
} from "@mui/icons-material";

const links = [
  {
    path: "/time-tracker",
    name: "Time Tracker",
    description:
      "Track time, with the ability to pause and resume, and see how much time you have left.",
    icon: AccessTime,
    accent: "#818cf8",
  },
  {
    path: "fitness-tracker",
    name: "Fitness Tracker",
    description: "Log and visualize weight/rep-related exercises",
    icon: FitnessCenter,
    accent: "#34d399",
  },
  {
    path: "/json-formatter",
    name: "JSON Formatter",
    description: "Format JSON, making it easier to read, and validate it.",
    icon: DataObject,
    accent: "#fb923c",
  },
  {
    path: "/uuid-generator",
    name: "UUID Generator",
    description: "Quickly generate a copy a v4 UUID.",
    icon: Fingerprint,
    accent: "#e879f9",
  },
  {
    path: "/character-counter",
    name: "Character Counter",
    description: "Count how how many characters are in a body of text.",
    icon: TextFields,
    accent: "#38bdf8",
  },
  {
    path: "/speed-reader",
    name: "Speed Reader",
    description: "Practice rapid reading with controlled pacing.",
    icon: Speed,
    accent: "#f472b6",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout heading="Web Tools">
      <Grid container spacing={2.5}>
        {links.map(({ path, name, description, icon: Icon, accent }) => (
          <Grid item xs={12} md={6} key={path}>
            <Link to={path} style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  padding: 1,
                  height: "100%",
                  "&:hover .tool-icon": {
                    transform: "scale(1.1)",
                    color: accent,
                  },
                  "&:hover": {
                    borderColor: `${accent}66`,
                    boxShadow: `0 8px 40px ${accent}22`,
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2.5,
                        background: `${accent}18`,
                        border: `1px solid ${accent}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        mt: 0.25,
                      }}
                    >
                      <Icon
                        className="tool-icon"
                        sx={{
                          color: `${accent}cc`,
                          fontSize: 22,
                          transition: "all 0.25s ease",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          color: "text.primary",
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.5 }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <CommonHead title="Web Tools" />;
