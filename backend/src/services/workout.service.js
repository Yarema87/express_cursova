import { prisma } from "../config/prisma.js";
import {startOfDay, endOfDay} from 'date-fns';
import workoutEmmiter from './workoutEmitter.js';

const workout_service = {
    async get_workouts(user_id){
        if(!user_id){
            const error = new Error('User id is absent');
            error.statusCode = 400;
            throw error;
        }
        const workouts = await prisma.workout.findMany({
            where: {
                OR: [
                    {'userId': user_id},
                    {'userId': null}
                ]
            }
        })
        return workouts;
    },
    async get_workout(id){
        if(!id){
            const error = new Error('Id is absent');
            error.statusCode = 400;
            throw error;
        }
        const workout = await prisma.workout.findUnique({
            where: {id: id}
        })
        if (!workout){
            const error = new Error('Workout not found');
            error.statusCode = 404;
            throw error;
        }
        return workout;
    },
    async get_user_workouts(user_id, status){
        if(!user_id || !status){
            const error = new Error('User data is absent');
            error.statusCode = 400;
            throw error;
        }
        let workouts;
        if(status === 'admin'){
            workouts = await prisma.workout.findMany({
                where: {
                    OR: [
                        {'userId': user_id},
                        {'userId': null}
                    ]
                }
            })
        }
        else if(status === 'user'){
            workouts = await prisma.workout.findMany({
                where: {userId: user_id}
            })
            if(!workouts){
                const error = new Error("User doesn't have own workouts");
                error.statusCode = 404;
                throw error;
            }
        }
        return workouts;
    },
    async add_workout(data){
        if(!data){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const {name, type, description, user_id} = data;
        const workout = await prisma.workout.create({
            data: {
                name: name,
                type: type,
                description: description || '',
                userId: user_id || null
            }
        })
        return workout;
    },
    async edit_workout(workout_id, data){
        try{
            if(!data || !workout_id){
                const error = new Error('Some data is absent');
                error.statusCode = 400;
                throw error;
            }
            const {name, type, description} = data;
            const workout = await prisma.workout.update({
                where: {id: workout_id},
                data: {
                    name: name,
                    type: type,
                    description: description || ''
                }
            });
            return workout;
        }
        catch(err){
            if(err.code === 'P2025'){
                const error = new Error('Workout not found');
                error.statusCode = 404;
                throw error;
            }
            throw err;
        }
    },
    async delete_workout(workout_id){
        try{
            if(!workout_id){
                const error = new Error('Id is absent');
                error.statusCode = 400;
                throw error;
            }
            const workout = await prisma.workout.delete({
                where: {id: workout_id}
            });
            return;
        }
        catch(err){
            if(err.code === 'P2025'){
                const error = new Error('Workout not found');
                error.statusCode = 404;
                throw error;
            }
            throw err;
        }
    },
    async finish_workout(data){
        if(!data){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const {userId, trainingId} = data;
        const log = await prisma.log.create({
            data: {
                userId: parseInt(userId),
                workoutId: parseInt(trainingId),
                calories: 0,
                timestamp: new Date(),
            },
        });
        workoutEmmiter.emit('workoutCompleted', {userId, trainingId});
        return log;
    },
    async done_workout(user_id, workout_id){
        if(!user_id || !workout_id){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const start = startOfDay(new Date());
        const end = endOfDay(new Date());
        const workout = await prisma.log.findFirst({
            where: {
                userId: user_id, 
                workoutId: workout_id,
                timestamp: {
                    gte: start,
                    lte: end,
                },
            },
        });
        if(workout){
            return workout;
        }
    }
}

export default workout_service;