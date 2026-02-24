-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Statistic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "totalCalories" INTEGER NOT NULL DEFAULT 0,
    "totalWorkouts" INTEGER NOT NULL DEFAULT 0,
    "favoriteWorkout" TEXT,
    "lastActivity" TEXT,
    CONSTRAINT "Statistic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Statistic" ("favoriteWorkout", "id", "lastActivity", "totalCalories", "totalWorkouts", "userId") SELECT "favoriteWorkout", "id", "lastActivity", "totalCalories", "totalWorkouts", "userId" FROM "Statistic";
DROP TABLE "Statistic";
ALTER TABLE "new_Statistic" RENAME TO "Statistic";
CREATE UNIQUE INDEX "Statistic_userId_key" ON "Statistic"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
