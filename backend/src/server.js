import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js';
import programRoutes from './routes/program.route.js';
import workoutRoutes from './routes/workout.route.js';
import programWorkoutRoutes from './routes/workout-program.route.js';
import exerciseRoutes from './routes/exercise.route.js';
import workoutExerciseRoutes from './routes/exercise-workout.route.js';
import statisticRoutes from './routes/statistic.route.js';
import achievmentRoutes from './routes/achievment.route.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api', userRoutes);
app.use('/api', programRoutes);
app.use('/api', workoutRoutes);
app.use('/api', programWorkoutRoutes);
app.use('/api', exerciseRoutes);
app.use('/api', workoutExerciseRoutes);
app.use('/api', statisticRoutes);
app.use('/api', achievmentRoutes);
app.use(errorMiddleware);

const PORT = 5000;

app.get('/api/health', (req, res) => {
    res.json({status: 'OK'});
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})