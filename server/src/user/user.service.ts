import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.interface'
import * as mongoose from 'mongoose';


@Injectable()
export class UserService {
  constructor(
    @Inject('User_MODEL') private readonly userModel: mongoose.Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async logIn(username: string): Promise<User | string> {
    const found = await this.userModel.findOne({ username: username });
    if (found) {
      return found;
    } else {
      return 'false';
    }
  }

  async signUp(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
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
