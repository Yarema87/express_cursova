import { prisma } from "../config/prisma.js";

const workout_program_service = {
    async add_workout_to_program(data){
        try{
            if(!data){
                const error = new Error('Data is absent');
                error.statusCode = 400;
                throw error;
            }
            const {workout_id, program_id, weekDay} = data;
            const model = await prisma.programWorkout.create({
                data: {
                    workoutId: parseInt(workout_id),
                    programId: parseInt(program_id), 
                    weekDay: weekDay
                }
            })
            return model;
        }
        catch(err){
            if(err.code === 'P2002'){
                const error = new Error('Program already added');
                error.statusCode = 409;
                throw error;
            }
            throw err;
        }
    },
    async get_program_workouts(program_id){
        if(!program_id){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const workouts = await prisma.programWorkout.findMany({
            where: {programId: program_id},
            include: {
                workout: {
                    select: {
                        id: true,
                        name: true,
                        type: true,
                        description: true
                    },
                },
            },
        });
        if (!workouts){
            const error = new Error('There are no workouts in this program');
            error.statusCode = 404;
            throw error;
        }
        return workouts;
    },
    async get_program_workout(id){
        if(!id){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const model = await prisma.programWorkout.findUnique({
            where: {id: id},
            include: {
                workout: {
                    select: {
                        id: true,
                        name: true,
                        type: true,
                        description: true
                    },
                },
                program: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
        if(!model){
            const error = new Error('Model not found');
            error.statusCode = 404;
            throw error;
        }
        return model;
    },
    async get_workout_program_links(){
        const links = await prisma.programWorkout.findMany();
        return links;
    },
    async edit_program_workout(id, data){
        try{
            if(!id || !data){
                const error = new Error('Data is absent');
                error.statusCode = 400;
                throw error;
            }
            const {weekDay} = data;
            const model = await prisma.programWorkout.update({
                where: {id: parseInt(id)},
                data: {
                    weekDay: weekDay
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
    async delete_program_workout(id){
        try{
            if(!id){
                const error = new Error('Data is absent');
                error.statusCode = 400;
                throw error;
            }
            const model = await prisma.programWorkout.delete({
                where: {id: parseInt(id)},
            });
            return;
        }
        catch(err){
            if(err.code === 'P2025'){
                const error = new Error('Model not found');
                ror.statusCode = 404;
                throw error;
            }
            throw err;
        }
    }
}

export default workout_program_service;