import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { CommonHead, PageLayout } from "../components/PageLayout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import {
  Close,
  Edit,
  ExpandMore,
  Pause,
  PlayArrow,
  RestartAlt,
} from "@mui/icons-material";
import { TimeEditor } from "../components/TimeEditor";
import { WORKDAY_MS } from "../utils/constants";
import { formatDuration } from "../utils";
import { ColumnBox } from "../components/ColumnBox";

dayjs.extend(duration);
dayjs.extend(localizedFormat);

type Action = "Pause" | "Resume" | "Start" | "Edit";

type Event = {
  /**
   * Millis since unix epoch.
   */
  timestamp: number;
  action: Action;
};

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

const ResetModal = ({
  isOpen,
  onClose,
  onReset,
}: {
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
}) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>Are You Sure?</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure you want to reset? All of your progress will be lost.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => {
          onReset();
          onClose();
        }}
      >
        Yes I'm sure
      </Button>
      <Button onClick={onClose}>No, cancel</Button>
    </DialogActions>
  </Dialog>
);

/**
 * Based on https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/
 */
const TimeTracker: React.FC<PageProps> = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(true);
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = React.useState(false);
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
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onReset={handleReset}
      />
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
              color={isPaused ? "warning" : "primary"}
              startIcon={isPaused ? <PlayArrow /> : <Pause />}
              onClick={handlePauseResume}
            >
              {isPaused ? "Resume" : "Pause"}
            </Button>
            <Button
              variant="outlined"
              startIcon={isEditorOpen ? <Close /> : <Edit />}
              onClick={() => setIsEditorOpen((isOpen) => !isOpen)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              startIcon={<RestartAlt />}
              onClick={() => setIsResetModalOpen(true)}
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
        {isEditorOpen ? (
          <TimeEditor
            onSave={(delta) => {
              setTime((current) => current + delta);
              delta !== 0 && recordEvent("Edit");
              setIsEditorOpen(false);
            }}
          />
        ) : null}
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
