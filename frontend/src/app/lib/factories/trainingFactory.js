import { PrismaClient } from "../../../generated/prisma";
import { BaseFactory } from "./baseFactory";

const prisma = new PrismaClient();

export class TrainingFactory extends BaseFactory {
    async create(data){
        return prisma.workout.create({
            data: {
                name: data.name,
                type: data.type,
                userId: data.userId || null,
                description: data.description || '',
            },
        });
    }
}