import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { CommonHead, PageLayout } from "../../components/PageLayout";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ColumnBox } from "../../components/ColumnBox";
import { useLiveQuery } from "dexie-react-hooks";
import { Exercise, db } from "../../utils/db";
import { useState } from "react";
import { LoadingPage } from "../../components/Loading";

const EditExerciseModal = ({
  isOpen,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (exercise: Exercise) => void;
}) => {
  const [name, setName] = useState("");
  const [minWeight, setMinWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(100);
  const [error, setError] = React.useState<string | undefined>(undefined);

  const handleSave = () => {
    if (!name) {
      setError("Name is required");
      return;
    }
    if (minWeight < 0 || maxWeight < 0) {
      setError("Min Weight and Max Weight must both be non-negative");
      return;
    }
    if (maxWeight < minWeight) {
      setError("Max Weight cannot be smaller than Min Weight");
      return;
    }
    // Passed validation.
    setError(undefined);
    const exercise: Exercise = { id: uuidv4(), name, minWeight, maxWeight };
    onSave(exercise);
    setName("");
    setMinWeight(0);
    setMaxWeight(0);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit Exercise</DialogTitle>
      <DialogContent>
        <ColumnBox gap={2} sx={{ marginTop: (theme) => theme.spacing(2) }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField
            label="Min Weight"
            type="number"
            value={minWeight}
            onChange={(e) => setMinWeight(parseInt(e.target.value))}
          ></TextField>
          <TextField
            label="Max Weight"
            type="number"
            value={maxWeight}
            onChange={(e) => setMaxWeight(parseInt(e.target.value))}
          ></TextField>
          {error ? <Alert severity="error">{error}</Alert> : null}
        </ColumnBox>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

const FitnessTrackerIndexPage: React.FC<PageProps> = () => {
  const exercises = useLiveQuery(() => db.exercises.orderBy("name").toArray());
  const [isEditExerciseModalOpen, setIsEditExerciseModalOpen] =
    React.useState(false);
  const isLoading = exercises === undefined;
  if (isLoading) return <LoadingPage />;
  const hasExercises = exercises.length > 0;
  return (
    <PageLayout>
      <EditExerciseModal
        isOpen={isEditExerciseModalOpen}
        onClose={() => setIsEditExerciseModalOpen(false)}
        onSave={(exercise) => db.exercises.put(exercise, exercise.id)}
      />
      <ColumnBox gap={2}>
        <Typography variant="h4">Fitness Tracker</Typography>
        {hasExercises ? (
          <>
            <Typography variant="body1">Let's Track!</Typography>
            {exercises.map((exercise) => (
              <Button
                key={exercise.id}
                href={`./exercise?exerciseId=${exercise.id}`}
              >
                {exercise.name}
              </Button>
            ))}
          </>
        ) : null}
        <Button
          variant="outlined"
          onClick={() => setIsEditExerciseModalOpen(true)}
        >
          Create an Exercise
        </Button>
      </ColumnBox>
    </PageLayout>
  );
};

export default FitnessTrackerIndexPage;

export const Head: HeadFC = () => <CommonHead title="Fitness Tracker" />;
