import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { CommonHead, PageLayout } from "../components/PageLayout";
import {
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
import { Close, Edit, Pause, PlayArrow, RestartAlt } from "@mui/icons-material";
import { TimeEditor } from "../components/TimeEditor";
import { WORKDAY_MS } from "../utils/constants";
import { formatDuration } from "../utils";
import { ColumnBox } from "../components/ColumnBox";
import { TimeEvent, TimeHistory } from "../components/TimeHistory";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

dayjs.extend(duration);
dayjs.extend(localizedFormat);

const DataDisplay = ({
  children,
  subtitle,
  accent,
}: {
  children: React.ReactFragment;
  subtitle: string;
  accent?: string;
}) => (
  <Box
    sx={{
      background: "rgba(13, 13, 26, 0.7)",
      border: `1px solid ${accent ? `${accent}30` : "rgba(129, 140, 248, 0.15)"}`,
      borderRadius: 2.5,
      px: 3,
      py: 2,
      minWidth: 180,
      textAlign: "center",
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        color: accent || "#a5b4fc",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "0.02em",
      }}
    >
      {children}
    </Typography>
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.25 }}>
      {subtitle}
    </Typography>
  </Box>
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
  const [isActive, setIsActive] = useLocalStorageState(
    "timeTracker.isActive",
    false
  );
  const [isPaused, setIsPaused] = useLocalStorageState(
    "timeTracker.isPaused",
    true
  );
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = React.useState(false);
  const [history, setHistory] = useLocalStorageState<TimeEvent[]>(
    "timeTracker.history",
    []
  );
  const [now, setNow] = useLocalStorageState("timeTracker.now", Date.now());
  const [time, setTime] = useLocalStorageState("timeTracker.time", 0);

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

  const recordEvent = (event: TimeEvent) =>
    setHistory((prev) => [...prev, event]);

  const timeRemaining = WORKDAY_MS - time;

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    recordEvent({ action: "Start", timestamp: Date.now() });
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    recordEvent({
      action: isPaused ? "Resume" : "Pause",
      timestamp: Date.now(),
    });
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
      <ColumnBox gap={3}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <DataDisplay subtitle="Time tracked" accent="#818cf8">
            {formatDuration(time)}
          </DataDisplay>
          <DataDisplay subtitle="Time remaining" accent="#34d399">
            {formatDuration(timeRemaining)}
          </DataDisplay>
          <DataDisplay subtitle="Finish time" accent="#fb923c">
            {dayjs(now).add(timeRemaining, "millisecond").format("LTS")}
          </DataDisplay>
        </Box>
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
              delta !== 0 &&
                recordEvent({ action: "Edit", timestamp: Date.now(), delta });
              setIsEditorOpen(false);
            }}
          />
        ) : null}
        <TimeHistory history={history} />
      </ColumnBox>
    </PageLayout>
  );
};

export default TimeTracker;

export const Head: HeadFC = () => <CommonHead title="Time Tracker" />;
