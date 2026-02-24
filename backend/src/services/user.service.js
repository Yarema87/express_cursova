import { prisma } from "../config/prisma.js";
import bcrypt from 'bcrypt';
import {SignJWT} from 'jose';

const secret = new TextEncoder().encode(process.env.SECRET);

const user_service = {
    async login(data) {
        const {email, password, remember} = data;
        const user = await prisma.user.findUnique({
            where: {email: email},
        })
        if (!user) {
            const error = new Error('User not found');
            error.statusCode = 401;
            throw error;
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword){
            const error = new Error('Wrong email or password');
            error.statusCode = 404;
            throw error;
        }

        const expires = !remember ? '12h' : '30d';
        const token = await new SignJWT(
            {
                id: user.id,
                email: user.email,
                access: user.access,
                card_type: user.card_type
            }
        )
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime(expires)
        .sign(secret);
        return {user, token, remember}
    },
    async sign_up(data){
        const {name, surname, email, password} = data;
        const hashed_password = await bcrypt.hash(password, 10);

        const registered_user = await prisma.user.findUnique({
            where: {email: email},
        });
        if (registered_user) {
            const error = new Error('User already registered');
            error.statusCode = 409;
            throw error;
        }

        const user = await prisma.user.create({
            data: {
                name: name,
                surname: surname,
                email: email,
                password: hashed_password,
                access: 'user',
                card_type: 'standard'
            }
        });
        const token = await new SignJWT(
            {
                id: user.id,
                email: user.email,
                access: user.access,
                card_type: user.card_type
            }
        )
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime(expires)
        .sign(secret);
        return {user, token}
    },
    async get_user_data(user_id){
        const user = await prisma.user.findUnique({
            where: {id: user_id}
        })
        if (!user){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        return user;
    },
    async edit_user_data(user_id, data){
        if(!user_id || !data){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        };
        try{
            const {name, surname, email, age, gender, height, weight} = data;
            const user = await prisma.user.update({
                where: {id: user_id},
                data: {
                    name: name,
                    surname: surname,
                    email: email,
                    age: parseInt(age) || null,
                    gender: gender.toUpperCase(),
                    height: parseInt(height) || null,
                    weight: parseInt(weight) || null
                }
            })
            const achievment = await prisma.achievment.findFirst({
                where: {type: 'data'},
            })
            if(achievment){
                const userHas = await prisma.userAchievment.findFirst({
                    where: {userId: user_id, achievmentId: achievment.id},
                });
                if(!userHas && age && height && weight){
                    await prisma.userAchievment.create({
                        data: {
                            userId: user_id,
                            achievmentId: achievment.id,
                            timestamp: new Date()
                        }
                    })
                }
            }
        }
        catch(err){
            if(err.code === 'P2025'){
                const error = new Error('User not found');
                error.statusCode = 404;
                throw error;
            }
            throw err;
        }
        return user;
    },
    async get_user_stats(user_id){
        if(!user_id){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const user_stats = await prisma.statistic.findUnique({
            where: {userId: user_id}
        });
        if(!user_stats){
            const error = new Error('There are no stats for this user');
            error.statusCode = 404;
            throw error;
        }
        return user_stats
    },
    async add_user_program(data){
        try{
            if(!data){
                const error = new Error('Data is absent');
                error.statusCode = 400;
                throw error;
            }
            const {programId, userId} = data;
            const model = await prisma.userProgram.create({
                data:{
                    programId: parseInt(programId),
                    userId: parseInt(userId),
                },
            });
            return model;
        }
        catch(err){
            if(err.code === 'P2002'){
                const error = new Error('User already has this program');
                error.statusCode = 409;
                throw error;
            }
            throw err;
        }
    },
    async get_user_programs(user_id){
        if(!user_id){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const programs = await prisma.userProgram.findMany({
            where: {userId: user_id},
            include: {
                program: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        programWorkouts: {
                            select: {
                                id: true,
                                weekDay: true,
                                workout: {
                                    select: {
                                        id: true,
                                        name: true,
                                        type: true,
                                        description: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if(!programs){
            const error = new Error("User does'nt have any programs");
            error.statusCode = 404;
            throw error;
        }
        return programs;
    },
    async delete_user_program(id){
        try{
            if(!id){
                const error = new Error('Data is absent');
                error.statusCode = 400;
                throw error;
            }
            const model = await prisma.userProgram.delete({
                where: {
                    id: id,
                }
            });
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

export default user_service;