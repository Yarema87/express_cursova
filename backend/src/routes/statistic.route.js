import express from 'express';
import { get_detailed_user_stats, get_daily_streak } from '../controllers/statistic.controller.js';

const router = express.Router();
router.get('/statistic/streak/:id', get_daily_streak);
router.get('/statistic/:id/:days', get_detailed_user_stats);

export default router;