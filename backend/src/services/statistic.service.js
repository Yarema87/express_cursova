import { prisma } from "../config/prisma.js";
import { startOfDay, endOfDay, subDays } from "date-fns";

const statistic_service = {
    async get_detailed_user_stats(user_id, days){
        if(!user_id || !days){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const today = new Date();
        const fromDate = subDays(today, days - 1);
        const logs = await prisma.log.findMany({
            where: {
                userId: user_id,
                timestamp: {
                    gte: startOfDay(fromDate),
                    lte: endOfDay(today),
                },
            },
            select: {
                timestamp: true,
                calories: true,
            },
            orderBy: {
                timestamp: 'asc',
            }
        });
        if(!logs){
            const error = new Error('There are no logs on this time period');
            error.statusCode = 404;
            throw error;
        }
        const dailyData = {};
        logs.forEach(log => {
            const dateKey = new Date(log.timestamp.toLocaleDateString('en-CA'));
            dailyData[dateKey] = (dailyData[dateKey] || 0) + (parseInt(log.calories) || 0);
        });
        const result = Object.entries(dailyData).map(([date, calories]) => ({
            date,
            calories,
        }))
        return result;
    },
    async get_daily_streak(user_id){
        if(!user_id){
            const error = new Error('Data is absent');
            error.statusCode = 400;
            throw error;
        }
        const logs = await prisma.log.findMany({
            where: {
                userId: user_id
            },
            select: {
                timestamp: true,
            },
            orderBy: {
                timestamp: 'desc',
            },
        });
        if(logs.length === 0){
            const error = new Error('Daily streak is 0');
            error.statusCode = 404;
            throw error;
        }
        const days = [
            ...new Set(logs.map(log => log.timestamp.toISOString().split('T')[0]))
        ];
        let streak = 1;
        const today = new Date().toISOString().split('T')[0];
        const firstDay = days[0];
        if(today !== firstDay){
            streak = 0;
            return streak;
        }
        for (let i = 1; i < days.length; i++){
            const prev = new Date(days[i-1]);
            const curr = new Date(days[i]);
            const diff = (prev - curr) / (1000 * 60 * 60 * 24);
            if(diff === 1){
                streak++;
            }
            else{
                break;
            }
        }
        return streak;
    }
}

export default statistic_service;