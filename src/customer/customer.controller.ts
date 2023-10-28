import { Controller, Post, Body, Delete, Param, Put, Get } from '@nestjs/common';
import { CustomerService } from '../prisma/customer.service';
import { Customer } from '@prisma/client';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {}

    @Post()
    async create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return await this.customerService.create(createCustomerDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Customer> {
        return await this.customerService.delete(parseInt(id));
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateCustomerDto: UpdateCustomerDto,
    ): Promise<Customer> {
        return await this.customerService.update(parseInt(id), updateCustomerDto);
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<Customer> {
        return await this.customerService.getById(parseInt(id));
    }

    @Get()
    async getAll(): Promise<Customer[]> {
        return await this.customerService.getAll();
    }
}

    @Get(':id')
    
}
