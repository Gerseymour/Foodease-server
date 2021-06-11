import { Controller, Put , Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  createAccount(): string {
    return 'new account';
  }

  @Put()
  addFriend(): string {
    return 'added friend';
  }
}
