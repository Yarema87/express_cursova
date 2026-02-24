/*
  Warnings:

  - You are about to drop the column `calories` on the `Statistic` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `Statistic` table. All the data in the column will be lost.
  - You are about to drop the column `workoutId` on the `Statistic` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Log" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "calories" REAL,
    "timestamp" TEXT NOT NULL,
    CONSTRAINT "Log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Log_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Statistic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "totalCalories" INTEGER NOT NULL DEFAULT 0,
    "totalWorkouts" INTEGER NOT NULL DEFAULT 0,
    "lastActivity" TEXT,
    CONSTRAINT "Statistic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Statistic" ("id", "userId") SELECT "id", "userId" FROM "Statistic";
DROP TABLE "Statistic";
ALTER TABLE "new_Statistic" RENAME TO "Statistic";
CREATE UNIQUE INDEX "Statistic_userId_key" ON "Statistic"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
