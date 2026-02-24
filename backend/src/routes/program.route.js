import express from 'express';
import { get_program, get_programs, get_user_programs, add_program, edit_program, delete_program } from '../controllers/program.controller.js';

const router = express.Router();

router.get('/program/all/:user_id', get_programs);
router.get('/program/:user_id/:status', get_user_programs);
router.get('/program/:id', get_program);
router.post('/program', add_program);
router.patch('/program/:id', edit_program);
router.delete('/program/:id', delete_program);

export default router;