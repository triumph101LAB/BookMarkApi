
import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { BookMarkSchema, Books } from 'src/schema/bookmark.schema';
import { User, UserSchema } from 'src/schema/user.schema';

@Module({
imports:[
    MongooseModule.forFeature([{

        name:Books.name,
        schema :BookMarkSchema,
       
    },
    {
        name:User.name,
        schema:UserSchema,
    }
])
],
controllers:[BookmarkController],
providers:[BookmarkService],

})

export class BookmarkModule {
    
}