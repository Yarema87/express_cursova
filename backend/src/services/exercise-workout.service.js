import { prisma } from "../config/prisma.js";

const exercise_workout_service = {
    async add_exercise_to_workout(data){
        try{
            if(!data){
                const error = new Error('Data is absent');
                error.statusCode = 400;
                throw error;
            }
            const {workout_id, exercise_id, repetitions, distance} = data;
            const model = await prisma.workoutExercise.create({
                data: {
                    workoutId: parseInt(workout_id),
                    exerciseId: parseInt(exercise_id),
                    repetitions: parseInt(repetitions),
                    distance: parseInt(distance) || null
                },
            });
            return model;
        }
        catch(err){
            if(err.code === 'P2002'){
                const error = new Error('Exercise is already added');
                error.status = 409;
                throw error;
            }
            throw err;
        }
    },
    async get_workout_exercises(workout_id){
        if(!workout_id){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const exercises = await prisma.workoutExercise.findMany({
            where: {workoutId: workout_id},
            include: {
                exercise: {
                    select: {
                        id: true,
                        name: true,
                        type: true,
                        calories: true,
                        description: true
                    },
                },
            },
        });
        if(!exercises){
            const error = new Error("This training doesn't have any exercises");
            error.statusCode = 404;
            throw error;
        }
        return exercises;
    },
    async get_workout_exercise(id){
        if(!id){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const model = await prisma.workoutExercise.findUnique({
            where: {id: id},
            include: {
                exercise: {
                    select: {
                        id: true,
                        name: true,                        
                    },
                },
                workout: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
        if(!model){
            const error = new Error("Such relation does not exist");
            error.statusCode = 404;
            throw error;
        }
        return model;
    },
    async get_exercise_workout_links(){
        const links = await prisma.workoutExercise.findMany();
        return links;
    },
    async edit_exercise_in_workout(id, data){
        try{
            if(!id || !data){
                const error = new Error('Data is absent');
                error.statusCode = 400;
                throw error;
            };
            const {repetitions, distance} = data;
            const model = await prisma.workoutExercise.update({
                where: {id: id},
                data: {
                    repetitions: parseInt(repetitions) || null,
                    distance: parseInt(distance) || null
                }
            });
            return model;
        }
        catch(err){
            if(err.code === 'P2025'){
                const error = new Error('Model not found');
                error.statusCode = 404;
                throw error;
            }
            throw err;
        }
    },
    async delete_exercise_in_workout(id){
        try{
            if(!id){
                const error = new Error('Data is absent');
                error.statusCode = 400;
                throw error;
            };
            const model = await prisma.workoutExercise.delete({
                where: {id: id},
            })
            return;
        }
        catch(err){
            if(err.code === 'P2025'){
                const error = new Error('Model not found');
                error.statusCode = 404;
                throw error;
            }
            throw err;
        }
    }
}

export default exercise_workout_service;