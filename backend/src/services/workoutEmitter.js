import {EventEmitter} from 'events';
import { prisma } from '../config/prisma.js';
import {evaluate} from 'mathjs';

const workoutEmitter = new EventEmitter();

workoutEmitter.on('workoutCompleted', async ({userId, workoutId}) => {
    const exercises = await prisma.workoutExercise.findMany({
        where: {workoutId: workoutId},
        include: {
            exercise: true,
        },
    });

    const user = await prisma.user.findUnique({
        where: {id: userId},
        select: {weight: true},
    });

    const weight = user?.weight || 70;

    let total_calories = 0;

    for (const e of exercises){
        const formula = e.exercise.calories || '0';
        const repetitions = e.repetitions || 1;
        const distance = e.distance / 1000 || 1;
        const exercise_cals = evaluate(formula, {repetitions, distance, weight});

        total_calories += exercise_cals;
    }

    await prisma.log.updateMany({
        where: {
            userId: userId,
            workoutId: workoutId,
        },
        data: {
            calories: total_calories,
        },
    });
});

workoutEmitter.on('workoutStatsUpdated', async ({userId, workoutId}) => {
    const totalCalories = await prisma.log.aggregate({
        where: {userId: parseInt(userId)},
        _sum: {calories: true},
    });

    const [mostFrequentWorkout] = await prisma.log.groupBy({
        by: ['workoutId'],
        where: { userId },
        _count: { workoutId: true },
        orderBy: { _count: { workoutId: 'desc' } },
        take: 1,
        });

    let favoriteWorkout = null;

    if (mostFrequentWorkout) {
        favoriteWorkout = await prisma.workout.findUnique({
            where: { id: mostFrequentWorkout.workoutId },
            select: { id: true, name: true },
        });
    }

    const user_stats = await prisma.statistic.findUnique({
        where: {userId: parseInt(userId)},
    });

    if(user_stats) {
        await prisma.statistic.update({
            where: {userId: parseInt(userId)},
            data: {
                totalCalories: totalCalories._sum.calories || 0,
                totalWorkouts: {increment: 1},
                lastActivity: new Date(),
                favoriteWorkout: favoriteWorkout.name,
            },
        });
    }
    else {
        await prisma.statistic.create({
            data: {
                userId: parseInt(userId),
                totalCalories: totalCalories._sum.calories || 0,
                totalWorkouts: 1,
                lastActivity: new Date(),
            },
        });
    }
});

workoutEmitter.on('workoutStatsUpdated', async ({userId, workoutId}) => {
    const calorie_achievements = await prisma.achievment.findMany({
        where: {type: 'calories'},
    });
    const training_achievments = await prisma.achievment.findMany({
        where: {type: 'training'},
    });

    const stats = await prisma.statistic.findUnique({
        where: {userId: parseInt(userId)},
    });

    for (const a of calorie_achievements) {
        const userHas = await prisma.userAchievment.findFirst({
            where: {userId, achievmentId: a.id},
        });

        if (userHas) continue;

        let conditionMet = false;
        if (a.condition <= stats.totalCalories) conditionMet = true;

        if (conditionMet){
            await prisma.userAchievment.create({
                data: {userId, achievmentId: a.id, timestamp: new Date()},
            });
        }
    }

    for (const a of training_achievments) {
        const userHas = await prisma.userAchievment.findFirst({
            where: {userId, achievmentId: a.id},
        });

        if (userHas) continue;

        let conditionMet = false;
        if (a.condition <= stats.totalWorkouts) conditionMet = true;

        if (conditionMet){
            await prisma.userAchievment.create({
                data: {userId, achievmentId: a.id, timestamp: new Date()},
            });
        }
    }
});

workoutEmitter.on('entityAdded', async ({type, userId}) => {
    const achievment = await prisma.achievment.findFirst({
        where: {type: (`custom_${type}`)},
    });
    if (achievment){
        const userHas = await prisma.userAchievment.findFirst({
            where: {userId, achievmentId: achievment.id},
        })
        if (!userHas){
            await prisma.userAchievment.create({
                data: {userId, achievmentId: achievment.id, timestamp: new Date()}
            })
        }
    }
});

export default workoutEmitter;