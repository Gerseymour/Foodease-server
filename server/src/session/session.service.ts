import { Injectable, Inject } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { Session } from './session.interface';
import { User } from '../user/user.interface';

@Injectable()
export class SessionService {
  constructor(
    @Inject('Session_MODEL') private sessionModel: mongoose.Model<Session>,
    @Inject('User_MODEL') private readonly userModel: mongoose.Model<User>,
  ) {}

  async createSession(user_1, user_2, menu_id): Promise<Session> {
    const newSession = new this.sessionModel({ user_1, user_2, menu_id });
    console.log(newSession._id);
    await newSession.save();
    await this.userModel.findByIdAndUpdate(user_1, {
      sessionList: [newSession._id],
    });
    await this.userModel.findByIdAndUpdate(user_2, {
      sessionList: [newSession._id],
    });
    return newSession;
  }

  async getSession(id: string): Promise<Session> {
    return await this.sessionModel.findOne({ _id: id })
  }

  async updateSession(id, decisions): Promise<any> {
    const session = await this.sessionModel.findOne({
      _id: id,
    });
    if (session.user_1_decisions.length == 0) {
      await this.sessionModel.findByIdAndUpdate(id, {
        user_1_decisions: decisions,
      })
      return { loading: 'loading' }
    } else {
      const results = [];
      for (let i = 0; i < session.user_1_decisions.length; ++i) {
        for (let j = 0; j < decisions.length; ++j) {
          if (session.user_1_decisions[i].title == decisions[j].title) {
            results.push(session.user_1_decisions[i]);
          }
        }
      }
      const randomNum = Math.floor(Math.random() * results.length);
      const final = results[randomNum]
      await this.userModel.findByIdAndUpdate(session.user_1, {
        sessionList: [],
      });
      await this.userModel.findByIdAndUpdate(session.user_2, {
        sessionList: [],
      });

      return final;
    }
  }
}
