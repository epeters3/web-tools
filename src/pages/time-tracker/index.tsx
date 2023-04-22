import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { CommonHead, PageLayout } from "../../components/PageLayout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  Typography,
  styled,
} from "@mui/material";
import { ExpandMore, Pause, PlayArrow, RestartAlt } from "@mui/icons-material";

dayjs.extend(duration);
dayjs.extend(localizedFormat);

type Action = "Pause" | "Resume" | "Start";

type Event = {
  /**
   * Millis since unix epoch.
   */
  timestamp: number;
  action: Action;
};

const WORKDAY_MS = 8 * 60 * 60 * 1000; // 8 hours in milliseconds

const formatDuration = (duration: number) =>
  `${duration < 0 ? "- " : ""}${dayjs
    .duration(Math.abs(duration))
    .format("HH:mm:ss")}`;

const ColumnBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const DataDisplay = ({
  children,
  subtitle,
}: {
  children: React.ReactFragment;
  subtitle: string;
}) => (
  <ColumnBox>
    <Typography variant="h4">{children}</Typography>
    <Typography>{subtitle}</Typography>
  </ColumnBox>
);

/**
 * Based on https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/
 */
const TimeTracker: React.FC<PageProps> = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(true);
  const [history, setHistory] = React.useState<Event[]>([]);
  const [now, setNow] = React.useState(Date.now());
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - now;
      setNow((now) => now + elapsed);
      if (isActive && isPaused === false) {
        setTime((time) => time + elapsed);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const recordEvent = (action: Action) =>
    setHistory((prev) => [...prev, { action, timestamp: Date.now() }]);

  const timeRemaining = WORKDAY_MS - time;

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    recordEvent("Start");
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    recordEvent(isPaused ? "Resume" : "Pause");
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setHistory([]);
  };

  return (
    <PageLayout heading="Time Tracker">
      <ColumnBox gap={2}>
        <DataDisplay subtitle="Time tracked so far">
          {formatDuration(time)}
        </DataDisplay>
        <DataDisplay subtitle="Time remaining">
          {formatDuration(timeRemaining)}
        </DataDisplay>
        <DataDisplay subtitle="Finish time">
          {dayjs(now).add(timeRemaining, "millisecond").format("LTS")}
        </DataDisplay>
        {isActive ? (
          <ButtonGroup>
            <Button
              variant="outlined"
              startIcon={isPaused ? <PlayArrow /> : <Pause />}
              onClick={handlePauseResume}
            >
              {isPaused ? "Resume" : "Pause"}
            </Button>
            <Button
              variant="outlined"
              startIcon={<RestartAlt />}
              onClick={handleReset}
            >
              Reset
            </Button>
          </ButtonGroup>
        ) : (
          <Button
            variant="outlined"
            startIcon={<PlayArrow />}
            onClick={handleStart}
          >
            Start
          </Button>
        )}
        {history.length > 0 ? (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">History</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {history.map((event) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    marginBottom: (theme) => theme.spacing(1),
                    justifyContent: "space-between",
                  }}
                >
                  <Box>{event.action}</Box>
                  <Box>{dayjs(event.timestamp).format("LTS")}</Box>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ) : null}
      </ColumnBox>
    </PageLayout>
  );
};

export default TimeTracker;

export const Head: HeadFC = () => <CommonHead title="Time Tracker" />;
