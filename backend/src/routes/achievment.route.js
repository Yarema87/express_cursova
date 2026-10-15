import express from 'express';
import { get_user_achievments } from '../controllers/achievment.controller.js';

const router = express.Router();

router.get('/achievment/:userId', get_user_achievments);

export default router;
