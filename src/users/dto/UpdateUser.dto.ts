
import { IsString, IsNotEmpty,IsOptional, IsNumber } from "class-validator";

export class UpdateUserDto{

    @IsOptional()
    @IsString()
    username:string;

    @IsNumber()
    @IsOptional()
    yearsOfExperirience?:number;

    @IsOptional()
    @IsOptional()
    password:string;
    

}