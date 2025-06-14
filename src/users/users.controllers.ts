import { Controller, HttpException, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { Get, Post, Patch, Delete ,Body} from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "src/schema/user.schema"
import { CreateUserDto } from "./dto/CreateUser.dto";
import mongoose from "mongoose";
import { UpdateUserDto } from "./dto/UpdateUser.dto";



@Controller('users')

export class UsersController{

    constructor(private readonly userService: UserService){}

    @Post()
    @UsePipes( new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);

    }

    @Get()
    getUsers(){

        return this.userService.getUsers();
    }

    @Get(':id')
    async findUserbyId(@Param('id') id:string){

        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('User id is not valid', 400);

        const findUser = await this.userService.findUserbyId(id);
        if(!findUser) throw new HttpException('User not found',400);
        return findUser;

    }

    @Patch(':id')
   async UpdateUser(@Param('id') id:string, @Body() updateUserDto:UpdateUserDto){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw  new HttpException('Id is not valid', 400);
        const updatedUser = await this.userService.UpdateUser(id,updateUserDto, );
        if(!updatedUser) throw new HttpException('Updated user not found', 400);
        return updatedUser;

    }
    @Delete(':id')
   async DeleteUser(@Param('id') id:string){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('Your Id Is not valid', 400);

        const deletedUser = await this.userService.DeleteUser(id);
        if(!deletedUser) throw new HttpException('Deleted User not Found', 400);

        return deletedUser;
    }



    

    



}