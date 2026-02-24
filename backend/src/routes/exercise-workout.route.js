import express from 'express';
import { get_workout_exercise, get_workout_exercises, get_exercise_workout_links, add_exercise_to_workout, edit_exercise_in_workout, delete_exercise_in_workout } from '../controllers/exercise-workout.controller.js';

const router = express.Router();
router.get('/workout-exercise/all', get_exercise_workout_links);
router.get('/workout-exercise/workout/:id', get_workout_exercises);
router.get('/workout-exercise/:id', get_workout_exercise);
router.post('/workout-exercise', add_exercise_to_workout);
router.patch('/workout-exercise/:id', edit_exercise_in_workout);
router.delete('/workout-exercise/:id', delete_exercise_in_workout);

export default router;