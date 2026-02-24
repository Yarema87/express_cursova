import { PrismaClient } from "../../../generated/prisma";
import { BaseFactory } from "./baseFactory";

const prisma = new PrismaClient();

export class ComplexFactory extends BaseFactory {
    async create(data){
        return prisma.program.create({
            data: {
                name: data.name,
                userId: data.userId || null,
                description: data.description || '',
            },
        });
    }
}