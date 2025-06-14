import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/user.schema';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Injectable()

export class UserService{

    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    createUser(createUserDto: CreateUserDto){
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    getUsers(){

        return this.userModel.find().populate(['books']);
    }
    
    findUserbyId(id: string){
        return this.userModel.findById(id).populate(['books']);
    }

    DeleteUser(id: string){
        return this.userModel.findByIdAndDelete(id);

    }
    async UpdateUser(id: string, updateUserDto: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }); // Means that the updated document will be returned
    }

    


    
}
