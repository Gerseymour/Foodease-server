import { Injectable } from '@nestjs/common';
import { User } from './user.interface'


@Injectable()
export class UserService {
  findAll(): User[] {
    return this.users
  }




  users = [
    {username: 'Gordon'},
    {username: 'Marco'},
    {username: 'Jamie'},
    {username: 'Andre'},
    {username: 'Simon'},
    {username: 'Mari'},
    {username: 'Jake'},
    {username: 'May'},
    {username: 'Nick'},
  ]
}
