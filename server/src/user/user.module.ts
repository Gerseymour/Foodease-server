import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DatabaseModule } from '../Model/database.module';
import { UserService } from './user.service';
import { userProviders } from './user.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
