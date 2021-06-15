import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { MenuModule } from './menu/menu.module'
import { UserModule } from './user/user.module'
import { SessionModule }from './session/session.module'
import { menuProviders } from './menu/menu.providers'
import { userProviders } from './user/user.providers'
import { sessionProviders } from './session/session.providers'


import { DatabaseModule } from './Model/database.module'


import { MenuController } from './menu/menu.controller';
import { MenuService } from './menu/menu.service';
import { SessionController } from './session/session.controller';
import { SessionService } from './session/session.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
require('dotenv').config();


@Module({
  imports: [MenuModule, UserModule, SessionModule, DatabaseModule],
  controllers: [AppController, UserController, MenuController, SessionController],
  providers: [AppService, MenuService, UserService, SessionService, ...menuProviders, ...userProviders, ...sessionProviders],
})
export class AppModule {}


//MongooseModule.forRoot(`mongodb://localhost:27017/foodeasedb`