import Dexie, { type EntityTable } from "dexie";

/**
 * The definition of an exercise.
 */
export type Exercise = {
  id: string;
  name: string;
  minWeight: number;
  maxWeight: number;
};

/**
 * A log entry of a repetition set that was done for an exercise.
 */
export type ExerciseSet = {
  /**
   * Primary key.
   */
  id: string;
  /**
   * The ID of the exercise that was done.
   */
  exerciseId: string;
  /**
   * MS since epoch. The time when the set was done.
   */
  createdAt: number;
  /**
   * The number of repetitions that were done.
   */
  reps: number;
  /**
   * Defaults to 0 (for bodyweight-based exercises). Measured in pounds.
   */
  weight: number;
  /**
   * Measured in seconds. For time-based exercises like planks.
   */
  duration?: number;
  /**
   * Rate of Perceived Exertion, on a scale of 1-10. Describes how hard
   * a set felt:
   * - 1–4: Very light, easy
   * - 5–6: Moderate effort
   * - 7–8: Hard, but a few reps left
   * - 9: Near max, maybe 1 rep left
   * - 10: Max effort, no reps left in reserve
   */
  rpe?: number;
};

export const db = new Dexie("WebToolsDatabase") as Dexie & {
  exercises: EntityTable<Exercise, "id">;
  exerciseSets: EntityTable<ExerciseSet, "id">;
};

db.version(1).stores({
  exercises: "id,name,minWeight,maxWeight",
  // The [field1+field2] syntax creates a compound index on field1 and field2.
  // This allows us to filter on both fields at once, and orders the results
  // by field1 first, then field2. Source:
  // https://dexie.org/docs/Compound-Index
  exerciseSets: "id,[createdAt+exerciseId],reps,weight,duration,rpe",
});
