import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Customer, Prisma } from '@prisma/client';

@Injectable()
export class CustomerService {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.CustomerCreateInput): Promise<Customer> {
        return this.prisma.customer.create({ data });
    }

    async update(
        id: number,
        data: Prisma.CustomerUpdateInput,
    ): Promise<Customer> {
        return this.prisma.customer.update({ where: { id }, data });
    }

    async delete(id: number): Promise<Customer> {
        return this.prisma.customer.delete({ where: { id } });
    }

    async getById(id: number): Promise<Customer> {
        return this.prisma.customer.findUnique({ where: { id } });
    }

    async getAll(): Promise<Customer[]> {
        return this.prisma.customer.findMany();
    }
}
