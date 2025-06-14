
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    username: string;


    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNumber()
    @IsOptional()
    yearsOfExperirience?:number;


}