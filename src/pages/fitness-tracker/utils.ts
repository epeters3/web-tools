import dayjs from "dayjs";
import { Exercise, ExerciseSet } from "../../utils/db";

export const groupExerciseSetsByDate = (exerciseSets: ExerciseSet[]) => {
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
};

export const groupExerciseSetsByExerciseAndDate = (
  exerciseSets: ExerciseSet[],
  exercises: Exercise[]
) => {
  const idToExercise = exercises.reduce(
    (acc, exercise) => {
      acc[exercise.id] = exercise;
      return acc;
    },
    {} as Record<string, Exercise>
  );
  const setsByDate = groupExerciseSetsByDate(exerciseSets);
  return setsByDate.map(({ date, sets }) => {
    const grouped = sets.reduce(
      (acc, set) => {
        if (!acc[set.exerciseId]) {
          acc[set.exerciseId] = [];
        }
        acc[set.exerciseId].push(set);
        return acc;
      },
      {} as Record<string, ExerciseSet[]>
    );
    return {
      date,
      sets: Object.entries(grouped).map(([exerciseId, sets]) => ({
        exercise: idToExercise[exerciseId],
        sets,
      })),
    };
  });
};
