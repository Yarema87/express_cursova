import { prisma } from "../config/prisma.js";

const exercise_service = {
    async get_exercises(type) {
        if(!type){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const exercises = await prisma.exercise.findMany({
            where: {type: type},
        });
        if(!exercises){
            const error = new Error('There are no exercises of this type');
            error.statusCode = 404;
            throw error;
        }
        return exercises;
    },
    async get_all_exercises(){
        const exercises = await prisma.exercise.findMany();
        return exercises;
    },
    async get_exercise(id){
        if(!id){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const exercise = await prisma.exercise.findUnique({
            where: {id: id},
        });
        if(!exercise){
            const error = new Error('Exercise not found');
            error.statusCode = 404;
            throw error;
        }
        return exercise;
    },
    async add_exercise(data){
        if(!data){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const {name, type, calories, description} = data;
        const exercise = await prisma.exercise.create({
            data:{
                name: name,
                type: type,
                calories: calories,
                description: description || ''
            }
        })
        return exercise;
    },
    async edit_exercise(data, exercise_id){
        try{
            if(!data || !exercise_id){
                const error = new Error('Data is absent');
                error.statusCode = 400;
                throw error;
            }
            const {name, type, calories, description} = data;
            const exercise = await prisma.exercise.update({
                where: {id: exercise_id},
                data: {
                    name: name,
                    type: type,
                    calories: calories,
                    description: description || ''
                }
            });
            return exercise;
        }
        catch(err){
            if(err.code === 'P2025'){
                const error = new Error('Exercise not found');
                error.statusCode = 404;
                throw error;
            }
            throw err;
        }
    },
    async delete_exercise(exercise_id){
        try{
            if(!exercise_id){
                const error = new Error('Data is absent');
                error.statusCode = 400;
                throw error;
            }
            const exercise = await prisma.exercise.delete({
                where: {id: exercise_id}
            });
            return;
        }
        catch(err){
            if(err.code === 'P2025'){
                const error = new Error('Exercise not found');
                error.statusCode = 404;
                throw error;
            }
            throw err;
        }
    }
}

export default exercise_service;