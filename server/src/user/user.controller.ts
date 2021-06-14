import { Controller, Put , Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto'
import { UserService } from './user.service'
import { User } from './user.interface'



@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createAccount(@Body() createUserDto: CreateUserDto): string {
    return 'new account';
  }

  @Get()
  getFriends(): User[] {
    return this.userService.findAll();
  }

  @Put()
  addFriend(): string {
    return 'added friend';
  }
}
