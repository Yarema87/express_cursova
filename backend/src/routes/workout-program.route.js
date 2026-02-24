import express from 'express';
import { add_workout_to_program, get_program_workout, get_program_workouts, get_workout_program_links, edit_program_workout, delete_program_workout } from '../controllers/workout-program.controller.js';

const router = express.Router();

router.get('/program-workout/all', get_workout_program_links);
router.get('/program-workout/program/:programId', get_program_workouts);
router.get('/program-workout/:id', get_program_workout);
router.post('/program-workout', add_workout_to_program);
router.patch('/program-workout/:id', edit_program_workout);
router.delete('/program-workout/:id', delete_program_workout);

export default router;