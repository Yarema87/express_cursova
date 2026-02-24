import express from 'express';
import { get_workout, get_workouts, get_user_workouts, add_workout, edit_workout, delete_workout, finish_workout, done_workout } from '../controllers/workout.controller.js';

const router = express.Router();

router.get('/workout/all/:userId', get_workouts);
router.get('/workout/:userId/:status', get_user_workouts);
router.get('/workout/:id', get_workout);
router.post('/workout', add_workout);
router.patch('/workout/:workoutId', edit_workout);
router.delete('/workout/:workoutId', delete_workout);
router.post('/workout/finish', finish_workout);
router.get('/workout/done/:userId/:workoutId', done_workout);

export default router;