import { Controller, Delete, Patch } from "@nestjs/common";
import { BookmarkService } from "./bookmark.service";
import { CreateBookmarkDto } from "./dto/CreateBookmark.dto";
import { Body,Param, Post,Get } from "@nestjs/common";
import { UpdateBookmarkDto } from "./dto/UpdateBookmark.dto";



@Controller('books')

export class BookmarkController{

    constructor (private readonly bookmarkService:BookmarkService ){}
        @Post()
        createBookmark(@Body() createBookmarkDto:CreateBookmarkDto){
            return this.bookmarkService.createBookmark(createBookmarkDto);

        }

        @Patch(':userId/:bookId')
        UpdateUserBookmark(@Param('userId') userId:string, @Param('bookId') bookId:string, @Body() updateBookmarkDto :UpdateBookmarkDto){

            return this.bookmarkService.UpdateUserBookmark(userId,bookId,updateBookmarkDto);
        }
        @Get(':userId/:bookId')
        getUserBookmark(@Param('userId') userId:string, @Param('bookId') bookId:string){
            return this.bookmarkService.getUserBookmark(userId,bookId);
        }

        @Delete(':userId/:bookId')
        deleteUserBookmark(@Param('userId') userId:string, @Param('bookId') bookId:string){
            return this.bookmarkService.deleteUserBookmark(userId, bookId);

        }

        
    
    
}