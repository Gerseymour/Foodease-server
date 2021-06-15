import * as mongoose from 'mongoose';
import { SessionSchema } from './schemas/session.schema';
export const sessionProviders = [
  {
    provide: 'Session_MODEL',
    useFactory: (connection: mongoose.Connection) => connection.model('Session', SessionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];