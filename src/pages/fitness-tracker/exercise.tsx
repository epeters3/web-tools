import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../../components/PageLayout";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { useQueryParam, StringParam } from "use-query-params";
import { Exercise, ExerciseSet, db } from "../../utils/db";
import { ColumnBox } from "../../components/ColumnBox";
import { v4 as uuidv4 } from "uuid";
import { ArrowBack, Check } from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { LoadingPage } from "../../components/Loading";

dayjs.extend(localizedFormat);

const ExerciseChart = ({
  sets,
  dataKey,
  color,
}: {
  sets: ExerciseSet[];
  dataKey: keyof ExerciseSet;
  color: string;
}) => (
  <ResponsiveContainer width="100%" height={150}>
    <LineChart data={sets}>
      <XAxis
        dataKey="createdAt"
        tickFormatter={(value) => dayjs(value).format("L")}
      />
      <YAxis />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Line type="monotone" dataKey={dataKey} stroke={color} />
    </LineChart>
  </ResponsiveContainer>
);

const ExerciseHistoryChart = ({ exercise }: { exercise: Exercise }) => {
  const sets = useLiveQuery(() =>
    db.exerciseSets.where("exerciseId").equals(exercise.id).toArray()
  );
  const isLoading = sets === undefined;
  if (isLoading) return <LoadingPage />;
  if (sets.length === 0) {
    return <Alert severity="info">No history yet for this exercise</Alert>;
  }
  return (
    <ColumnBox sx={{ marginTop: (theme) => theme.spacing(2) }}>
      <Typography variant="h6">Weight</Typography>
      <ExerciseChart sets={sets} dataKey="weight" color="#8884d8" />
      <Typography variant="h6">Reps</Typography>
      <ExerciseChart sets={sets} dataKey="reps" color="#82ca9d" />
    </ColumnBox>
  );
};

const TrackExercise = ({ exercise }: { exercise: Exercise }) => {
  const baseSettingKey = `fitnessTracker.exercise.${exercise.id}.setting`;
  const [weight, setWeight] = useLocalStorageState(
    `${baseSettingKey}.weight`,
    exercise.minWeight
  );
  const [reps, setReps] = useLocalStorageState(`${baseSettingKey}.reps`, 10);
  const [isTracked, setIsTracked] = React.useState(false);

  const handleSave = () => {
    const exerciseSet: ExerciseSet = {
      id: uuidv4(),
      createdAt: Date.now(),
      exerciseId: exercise.id,
      reps,
      weight,
    };
    db.exerciseSets.add(exerciseSet);
    setIsTracked(true);
    setTimeout(() => setIsTracked(false), 1000);
  };

  React.useEffect(() => {
    if (exercise && weight === undefined) {
      setWeight(exercise.minWeight);
    }
  }, [exercise, weight]);

  return (
    <ColumnBox sx={{ marginTop: (theme) => theme.spacing(2) }}>
      <Typography variant="h5">Log</Typography>
      <Typography variant="body1">How much weight?</Typography>
      <Slider
        sx={{ marginTop: (theme) => theme.spacing(5) }}
        value={weight}
        min={exercise.minWeight}
        max={exercise.maxWeight}
        valueLabelDisplay="on"
        step={5}
        marks
        valueLabelFormat={(value) => `${value} lbs`}
        onChange={(_, value) => setWeight(value as number)}
      />
      <Typography variant="body1">How many reps?</Typography>
      <Slider
        sx={{ marginTop: (theme) => theme.spacing(5) }}
        value={reps}
        min={1}
        max={20}
        valueLabelDisplay="on"
        step={1}
        marks
        valueLabelFormat={(value) => `${value} reps`}
        onChange={(_, value) => setReps(value as number)}
      />
      <Button
        startIcon={isTracked ? <Check /> : null}
        color={isTracked ? "success" : "primary"}
        onClick={handleSave}
        sx={{ marginTop: (theme) => theme.spacing(2) }}
        variant="contained"
      >
        {isTracked ? "Logged!" : "Log"}
      </Button>
    </ColumnBox>
  );
};

const ExerciseHistoryList = ({ exercise }: { exercise: Exercise }) => {
  const exerciseSets = useLiveQuery(() =>
    db.exerciseSets
      .where("exerciseId")
      .equals(exercise.id)
      .reverse()
      .limit(10)
      .toArray()
  );
  const isLoading = exerciseSets === undefined;
  const setsByDate = React.useMemo(() => {
    if (!exerciseSets) return [];
    const grouped = exerciseSets.reduce(
      (acc, set) => {
        const date = dayjs(set.createdAt).format("YYYY-MM-DD");
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(set);
        return acc;
      },
      {} as Record<string, ExerciseSet[]>
    );
    return Object.entries(grouped)
      .map(([date, sets]) => ({
        date,
        sets,
      }))
      .sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix());
  }, [exerciseSets]);

  if (isLoading) return <LoadingPage />;
  return (
    <ColumnBox sx={{ marginTop: (theme) => theme.spacing(2) }}>
      <Typography variant="h5">History</Typography>
      {setsByDate.map((dayOfSets) => (
        <ColumnBox key={dayOfSets.date}>
          <Typography variant="h6" key={dayOfSets.date}>
            {dayOfSets.date}
          </Typography>
          {dayOfSets.sets.map((set) => (
            <Typography key={set.id} variant="body1">
              {set.weight} lbs x {set.reps} reps at{" "}
              {new Date(set.createdAt).toLocaleTimeString()}
            </Typography>
          ))}
        </ColumnBox>
      ))}
    </ColumnBox>
  );
};

const ExerciseView = () => {
  const [exerciseId, _] = useQueryParam("exerciseId", StringParam);
  const [exercise, isLoaded] = useLiveQuery(
    () =>
      exerciseId
        ? db.exercises.get(exerciseId).then((exercise) => [exercise, true])
        : [undefined, false],
    [],
    [undefined, false]
  );
  const isLoading = !isLoaded;
  if (isLoading) return <LoadingPage />;
  if (!exercise) {
    return <Alert severity="info">Exercise not found</Alert>;
  }
  return (
    <>
      <Box sx={{ display: "flex", gap: (theme) => theme.spacing(1) }}>
        <IconButton href="./..">
          <ArrowBack />
        </IconButton>
        <Typography variant="h4">{exercise.name}</Typography>
      </Box>
      <TrackExercise exercise={exercise} />
      <ExerciseHistoryList exercise={exercise} />
      <ExerciseHistoryChart exercise={exercise} />
    </>
  );
};

const FitnessTrackerExercisePage: React.FC<PageProps> = () => (
  <PageLayout>
    <ExerciseView />
  </PageLayout>
);

export default FitnessTrackerExercisePage;

export const Head: HeadFC = () => <CommonHead title="Track Exercise" />;
