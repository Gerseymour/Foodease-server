import * as mongoose from 'mongoose';
import { UserSchema } from './schemas/user.schema';
export const userProviders = [
  {
    provide: 'User_MODEL',
    useFactory: (connection: mongoose.Connection) =>
      connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];