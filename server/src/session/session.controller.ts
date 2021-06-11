import { Controller, Delete, Post } from '@nestjs/common';

@Controller('session')
export class SessionController {
 @Post()
 createSession(): string {
   return 'sessions created';
 }

 @Delete()
 deleteSession(): string {
   return 'deleted session'
 }
}
