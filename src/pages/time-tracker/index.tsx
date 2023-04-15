import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

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
      <p>{time / 1000}</p>
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
