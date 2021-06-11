import { Controller, Put , Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto'

@Controller('user')
export class UserController {
  @Post()
  createAccount(@Body() createUserDto: CreateUserDto): string {
    return 'new account';
  }

  @Put()
  addFriend(): string {
    return 'added friend';
  }
}
