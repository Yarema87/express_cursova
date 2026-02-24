import { prisma } from "../config/prisma.js";

const program_service = {
    async get_programs(user_id){
        if(!user_id){
            const error = new Error('User id is absent');
            error.statusCode = 400;
            throw error;
        }
        const programs = await prisma.program.findMany({
            where: {
                OR: [
                    {'userId': null},
                    {'userId': user_id}
                ]
            }
        })
        return programs
    },
    async get_program(id){
        if(!id){
            const error = new Error('Id is absent');
            error.statusCode = 400;
            throw error;
        }
        const program = await prisma.program.findUnique({
            where: {
                id: id,
            }
        })
        if (!program){
            const error = new Error('Program is not found');
            error.statusCode = 404;
            throw error;
        }
        return program
    },
    async get_user_programs(status, user_id){
        if (!status || !user_id){
            const error = new Error('Status or user_id is absent');
            error.statusCode = 400;
            throw error;
        }
        let programs
        if (status === 'admin'){
            programs = await prisma.program.findMany({
                where: {
                    OR: [
                        {'userId': null},
                        {'userId': user_id}
                    ]
                }
            })
        }
        else if (status === 'user'){
            programs = await prisma.program.findMany({
                where: {
                    'userId': user_id
                }
            })
            if(programs.length === 0){
                const error = new Error("User doesn't have own programs");
                error.statusCode = 404;
                throw error
            }
        }
        return programs
    },
    async add_program(data){
        if(!data){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const {name, userId, description} = data;
        const program = await prisma.program.create({
            data:{
                name: name,
                userId: userId || null,
                description: description || '',
            }
        })
        return program;
    },
    async edit_program(data, program_id){
        try{
            if(!data || !program_id){
                const error = new Error('Data is missing');
                error.statusCode = 400;
                throw error;
            }
            const {name, description} = data;
            const program = await prisma.program.update({
                where: {id: program_id},
                data: {
                    name: name,
                    description: description,
                }
            })
            return program;
        }
        catch(err){
            if(err.code === 'P2025'){
                const error = new Error('Program not found');
                error.statusCode = 404;
                throw error;
            }
            throw err;
        }
    },
    async delete_program(program_id){
        try{
            if(!program_id){
                const error = new Error('Data is missing');
                error.statusCode = 400;
                throw error;
            }
            const program = await prisma.program.delete({
                where: {id: program_id}
            })
            return;
        }
        catch(err){
            if(err.code === 'P2025'){
                const error = new Error('Program not found');
                error.statusCode = 404;
                throw error;
            }
            throw err;
        }
    }
}

export default program_service;