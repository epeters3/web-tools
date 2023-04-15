import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(duration);
dayjs.extend(localizedFormat);

const WORKDAY_MS = 8 * 60 * 60 * 1000; // 8 hours in milliseconds

const formatDuration = (duration: number) =>
  dayjs.duration(duration).format("HH:mm:ss");

/**
 * Based on https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/
 */
const TimeTracker: React.FC<PageProps> = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(true);
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1000);
      }, 1000);
    } else {
      interval && clearInterval(interval);
    }
    return () => {
      interval && clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const timeRemaining = WORKDAY_MS - time;

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <main>
      <h1>Time Tracker</h1>
      <p>Time tracked so far: {formatDuration(time)}</p>
      <p>Time remaining: {formatDuration(timeRemaining)}</p>
      <p>
        Finish time: {dayjs().add(timeRemaining, "millisecond").format("LTS")}
      </p>
      {isActive ? (
        <>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handlePauseResume}>
            {isPaused ? "Resume" : "Pause"}
          </button>
        </>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
    </main>
  );
};

export default TimeTracker;

export const Head: HeadFC = () => <title>Time Tracker</title>;
