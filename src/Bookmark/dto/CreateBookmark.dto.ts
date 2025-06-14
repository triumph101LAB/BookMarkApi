import { IsString, IsNotEmpty } from "class-validator";


export class CreateBookmarkDto{

    @IsString()
    @IsNotEmpty()
    title:string;

    @IsNotEmpty()
    @IsString()
    author:string;

    @IsNotEmpty()
    @IsString()
    description:string;
    
    @IsString()
    @IsNotEmpty()
    userId:string;
    
}