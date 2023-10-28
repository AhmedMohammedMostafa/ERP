import {  IsString, IsEmail, IsNumber } from 'class-validator';

export class UpdateCustomerDto {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsString()
    phone: string;
    @IsString()
    address: string;
    @IsString()
    country: string
    @IsString()
    city: string;
    @IsString()
    state: string;
    @IsNumber()
    zip: string;
}

