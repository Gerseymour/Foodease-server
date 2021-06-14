import { Controller, Param, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';
import { User } from './user.interface';



@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.signUp(createUserDto);
  }

  @Get()
  async getFriends(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':username')
  async logIn(@Param('username') username): Promise<User | string> {
    return this.userService.logIn(username);
  }

  // @Put()
  // addFriend(): string {
  //   return 'added friend';
  // }
}
