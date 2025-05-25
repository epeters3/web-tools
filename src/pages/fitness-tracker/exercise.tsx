import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../../components/PageLayout";
import { Alert, Button, Slider, Typography } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { useQueryParam, StringParam } from "use-query-params";
import { Exercise, ExerciseSet, db } from "../../utils/db";
import { ColumnBox } from "../../components/ColumnBox";
import { v4 as uuidv4 } from "uuid";
import { Check } from "@mui/icons-material";
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
  if (!sets || sets.length === 0) {
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
  const [weight, setWeight] = React.useState(exercise.minWeight);
  const [reps, setReps] = React.useState(10);
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
        step={2.5}
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
  if (!exerciseSets || exerciseSets.length === 0) {
    return null;
  }
  return (
    <ColumnBox sx={{ marginTop: (theme) => theme.spacing(2) }}>
      <Typography variant="h5">History</Typography>
      {exerciseSets.map((set) => (
        <div key={set.id}>
          <Typography variant="body1">
            {set.weight} lbs x {set.reps} reps on{" "}
            {new Date(set.createdAt).toLocaleString()}
          </Typography>
        </div>
      ))}
    </ColumnBox>
  );
};

const ExerciseView = () => {
  const [exerciseId, _] = useQueryParam("exerciseId", StringParam);
  const exercise = useLiveQuery(() =>
    exerciseId ? db.exercises.get(exerciseId) : undefined
  );
  if (!exercise) {
    return <Alert severity="info">Exercise not found</Alert>;
  }
  return (
    <>
      <ColumnBox>
        <Typography variant="h4">{exercise.name}</Typography>
      </ColumnBox>
      <ExerciseHistoryChart exercise={exercise} />
      <TrackExercise exercise={exercise} />
      <ExerciseHistoryList exercise={exercise} />
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
