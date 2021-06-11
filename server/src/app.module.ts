import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { UserController } from './user/user.controller';
import { MenuController } from './Controllers/menu/menu.controller';
import { SessionController } from './session/session.controller';
require('dotenv').config();


@Module({
  imports: [MongooseModule.forRoot(`mongodb://localhost:27017/${process.env.DB_name}`)],
  controllers: [AppController, UserController, MenuController, SessionController],
  providers: [AppService],
})
export class AppModule {}
