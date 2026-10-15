import { prisma } from "../config/prisma.js";

const achievment_service = {
    async get_user_achievments(userId) {
        if(!userId){
            const error = new Error('User id is absent');
            error.statusCode = 400;
            throw error;
        }

        const achievments = await prisma.userAchievment.findMany({
            where: {userId},
            include: {
                achievment: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                    },
                },
            },
            orderBy: {timestamp: 'desc'},
        });

        if(!achievments){
            const error = new Error('Achievments not found');
            error.statusCode= 404;
            throw error;
        }

        return achievments;
    }
}

export default achievment_service;