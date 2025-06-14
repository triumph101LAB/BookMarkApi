import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schema/user.schema";
import { UserService } from "./users.service";
import { UsersController } from "./users.controllers";
import { Books, BookMarkSchema } from "src/schema/bookmark.schema";

@Module({
 imports:[
    MongooseModule.forFeature([
        {
        name:User.name,
        schema:UserSchema
    },
    {
        name:Books.name,
        schema:BookMarkSchema
    }
])
 ],
 controllers:[UsersController],
 providers:[UserService],

})
export class UserModule{
}