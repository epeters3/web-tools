import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { CommonHead, PageLayout } from "../components/PageLayout";
import { ColumnBox } from "../components/ColumnBox";
import { Pause, PlayArrow, RestartAlt } from "@mui/icons-material";

const SpeedReaderPage: React.FC<PageProps> = () => {
  const [text, setText] = React.useState("");
  const [wordsPerMinute, setWordsPerMinute] = React.useState(300);
  const [wordsPerView, setWordsPerView] = React.useState(1);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const handleNumberChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = Number(event.target.value);
      setter(Number.isNaN(nextValue) ? 0 : nextValue);
    };

  const words = React.useMemo(() => {
    const trimmed = text.trim();
    return trimmed ? trimmed.split(/\s+/) : [];
  }, [text]);

  const safeWordsPerMinute = Math.max(1, wordsPerMinute);
  const safeWordsPerView = Math.max(1, wordsPerView);
  const wordsPerTick = Math.min(safeWordsPerView, words.length);
  const msPerTick = (60000 / safeWordsPerMinute) * safeWordsPerView;

  const currentChunk = words
    .slice(currentIndex, currentIndex + wordsPerTick)
    .join(" ");

  React.useEffect(() => {
    setIsPlaying(false);
    setCurrentIndex(0);
  }, [text]);

  React.useEffect(() => {
    if (!isPlaying || words.length === 0) {
      return;
    }

    if (currentIndex >= words.length) {
      setIsPlaying(false);
      setCurrentIndex(0);
      return;
    }

    const timeout = window.setTimeout(() => {
      setCurrentIndex((index) => index + safeWordsPerView);
    }, msPerTick);

    return () => window.clearTimeout(timeout);
  }, [currentIndex, isPlaying, msPerTick, safeWordsPerView, words.length]);

  return (
    <PageLayout heading="Speed Reader">
      <ColumnBox gap={2}>
        <>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Words per minute"
              type="number"
              value={wordsPerMinute}
              fullWidth
              inputProps={{ min: 60, max: 1200, step: 10 }}
              onChange={handleNumberChange(setWordsPerMinute)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Words per window"
              type="number"
              value={wordsPerView}
              fullWidth
              inputProps={{ min: 1, max: 10, step: 1 }}
              onChange={handleNumberChange(setWordsPerView)}
            />
          </Grid>
        </Grid>
        <Typography variant="h4" align="center">
          {currentChunk || "Paste text above to begin."}
        </Typography>
        <ButtonGroup>
          <Button
            variant="outlined"
            startIcon={isPlaying ? <Pause /> : <PlayArrow />}
            onClick={() => setIsPlaying((playing) => !playing)}
            disabled={words.length === 0}
          >
            {isPlaying ? "Pause" : "Start"}
          </Button>
          <Button
            variant="outlined"
            startIcon={<RestartAlt />}
            onClick={() => {
              setIsPlaying(false);
              setCurrentIndex(0);
            }}
            disabled={words.length === 0}
          >
            Reset
          </Button>
        </ButtonGroup>
        {words.length > 0 ? (
          <Box width="100%">
            <LinearProgress
              variant="determinate"
              value={Math.min((currentIndex / words.length) * 100, 100)}
            />
          </Box>
        ) : null}
      </ColumnBox>
    </PageLayout>
  );
};

export default SpeedReaderPage;

export const Head: HeadFC = () => <CommonHead title="Speed Reader" />;
