import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { UserController } from './user/user.controller';
import { MenuController } from './menu/menu.controller';
import { SessionController } from './session/session.controller';
import { MenuService } from './menu/menu.service';
import { UserService } from './user/user.service';
import { SessionService } from './session/session.service';
require('dotenv').config();


@Module({
  imports: [MongooseModule.forRoot(`mongodb://localhost:27017/${process.env.DB_name}`)],
  controllers: [AppController, UserController, MenuController, SessionController],
  providers: [AppService, MenuService, UserService, SessionService],
})
export class AppModule {}
