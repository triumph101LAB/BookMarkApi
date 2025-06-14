import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { UserModule } from './users/users.module';

import { BookmarkModule } from './Bookmark/bookmark.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/customers'),
    UserModule,
    BookmarkModule // If the userModule was not imported, the application would not be able to use the UserModule's features.
    // Also it would not haved the routes WAssociated with the module wouldn't have been mapped

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
