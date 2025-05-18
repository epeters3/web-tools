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

const ExerciseHistory = ({ exercise }: { exercise: Exercise }) => {
  // TODO: use a chart instead.
  const exerciseSets = useLiveQuery(() =>
    db.exerciseSets.where("exerciseId").equals(exercise.id).sortBy("createdAt")
  );
  if (!exerciseSets || exerciseSets.length === 0) {
    return <Alert severity="info">No history yet for this exercise</Alert>;
  }
  return (
    <ColumnBox>
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
      <ExerciseHistory exercise={exercise} />
      <TrackExercise exercise={exercise} />
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
