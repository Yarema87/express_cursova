import express from 'express';
import { get_exercise, get_all_exercises, get_exercises, add_exercise, edit_exercise, delete_exercise } from '../controllers/exercise.controller.js';

const router = express.Router();

router.get('/exercise/all', get_all_exercises);
router.get('/exercise/:id', get_exercise);
router.get('/exercise/type/:type', get_exercises);
router.post('/exercise', add_exercise);
router.patch('/exercise/:id', edit_exercise);
router.delete('/exercise/:id', delete_exercise);

export default router;
