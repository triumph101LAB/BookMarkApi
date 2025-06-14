import { HttpException, Injectable } from "@nestjs/common";
import { CreateBookmarkDto } from "./dto/CreateBookmark.dto";
import { BookMarkSchema } from "src/schema/bookmark.schema";
import { Books } from "src/schema/bookmark.schema";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { User } from "src/schema/user.schema";
import { UpdateBookmarkDto } from "./dto/UpdateBookmark.dto";
import { find } from "rxjs";
@Injectable()

export class BookmarkService{
    
    constructor(@InjectModel(Books.name) private booksModel: Model<Books>,@InjectModel(User.name) private userModel: Model<User>){}

   async createBookmark({userId, ...createBookmarkDto}:CreateBookmarkDto){
            /*
        const newBookmark = new this.booksModel(createBookmarkDto);
        return newBookmark.save(); */

    //Checkif the user exist

    const findUser = await this.userModel.findById(userId);
    if(!findUser) throw new HttpException('User not found',404);
    const newBookmark = new this.booksModel(createBookmarkDto);

    const savedBookmark = await newBookmark.save();

    await findUser.updateOne({$push:{
        books:savedBookmark._id

    },
    })

    return savedBookmark;
   }

   UpdateUserBookmark(userId:string, bookId:string, updateBookmarkDto:UpdateBookmarkDto){

    // Check if user exist

    const findUser = mongoose.Types.ObjectId.isValid(userId);// Checking if the Users ID is valid
    if(!findUser) throw new HttpException('User not found', 404);

    // Check if Book exists

    const findBook = mongoose.Types.ObjectId.isValid(bookId)// Checking if the book is found
    if(!findBook) throw new HttpException(' Book  not found', 404);

    return this.booksModel.findByIdAndUpdate( {_id:bookId, userId:userId, }, updateBookmarkDto, {new:true}) // Returning the Updated Document
   }

   getUserBookmark(userId:string, bookId:string)
   {

    // Check if the user Exists

    const findUser = mongoose.Types.ObjectId.isValid(userId); // Checking if the userId is valid
    if(!findUser) throw new HttpException(' User not  found', 404);
    // Checking if the BookMark exists
    
    const findBook = mongoose.Types.ObjectId.isValid(bookId); // Checking if the Bookmark is valid
    if(!findBook) throw new HttpException(' Book not found',404);

    return this.booksModel.findById({_id:bookId, userId:userId});
   }

   deleteUserBookmark(userId:string, bookId:string){

    // check if the user Exists
    const findUser = mongoose.Types.ObjectId.isValid(userId);
    if(!findUser) throw new HttpException('User not found',404);
    // Check if the BookMark Exists

    const findBook = mongoose.Types.ObjectId.isValid(bookId); // or this.booksModel.findById(userId)
    if(!findUser) throw new HttpException('Book not found', 404);

    // return the post of the user
    return this.booksModel.findByIdAndDelete({_id:bookId, userId:userId});



   }


}