import { PrismaClient } from "../../../generated/prisma";
import { BaseFactory } from "./baseFactory";

const prisma = new PrismaClient();

export class ExerciseFactory extends BaseFactory {
    async create(data){
        return prisma.exercise.create({
            data: {
                name: data.name,
                type: data.type,
                calories: data.calories,
                description: data.description || '',
            },
        });
    }
}