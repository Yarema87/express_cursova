import express from 'express';
import { login, sign_up, get_user_data, edit_user_data, log_out, get_user_stats, add_user_program, get_user_programs, delete_user_program } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/user/stats/:id', get_user_stats);
router.post('/user/log-in', login);
router.post('/user/log_out', log_out);
router.post('/user/sign-up', sign_up);
router.get('/user/info', get_user_data);
router.patch('/user/info', edit_user_data);
router.post('/user/program', add_user_program);
router.get('/user/program/:id', get_user_programs);
router.delete('/user/program/:id', delete_user_program);

export default router;