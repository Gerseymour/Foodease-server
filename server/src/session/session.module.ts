import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { sessionProviders } from './session.providers';
import { DatabaseModule } from 'src/Model/database.module';
import { userProviders } from 'src/user/user.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [SessionController],
  providers: [SessionService, ...sessionProviders, ...userProviders],
})
export class SessionModule {}
