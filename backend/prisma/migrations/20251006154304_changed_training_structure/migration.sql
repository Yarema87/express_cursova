/*
  Warnings:

  - You are about to drop the column `calories` on the `Workout` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `WorkoutExercise` table. All the data in the column will be lost.
  - You are about to alter the column `distance` on the `WorkoutExercise` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `calories` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Workout` table without a default value. This is not possible if the table is not empty.
  - Made the column `distance` on table `WorkoutExercise` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "calories" TEXT NOT NULL,
    "description" TEXT
);
INSERT INTO "new_Exercise" ("description", "id", "name", "type") SELECT "description", "id", "name", "type" FROM "Exercise";
DROP TABLE "Exercise";
ALTER TABLE "new_Exercise" RENAME TO "Exercise";
CREATE TABLE "new_Workout" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT
);
INSERT INTO "new_Workout" ("description", "id", "name") SELECT "description", "id", "name" FROM "Workout";
DROP TABLE "Workout";
ALTER TABLE "new_Workout" RENAME TO "Workout";
CREATE TABLE "new_WorkoutExercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workoutId" INTEGER NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "repetitions" INTEGER NOT NULL,
    "distance" INTEGER NOT NULL,
    CONSTRAINT "WorkoutExercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "WorkoutExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_WorkoutExercise" ("distance", "exerciseId", "id", "repetitions", "workoutId") SELECT "distance", "exerciseId", "id", "repetitions", "workoutId" FROM "WorkoutExercise";
DROP TABLE "WorkoutExercise";
ALTER TABLE "new_WorkoutExercise" RENAME TO "WorkoutExercise";
CREATE UNIQUE INDEX "WorkoutExercise_workoutId_exerciseId_key" ON "WorkoutExercise"("workoutId", "exerciseId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
