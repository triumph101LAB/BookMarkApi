import { IsString, IsOptional } from 'class-validator';


export class UpdateBookmarkDto{

@IsOptional()
@IsString()

title?:string;

@IsOptional()
@IsString()
description?:string


    
}