import * as mongoose from 'mongoose';
import { MenuSchema } from './schemas/menu.schema';
export const menuProviders = [
  {
    provide: 'Menu_MODEL',
    useFactory: (connection: mongoose.Connection) => connection.model('Menu', MenuSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];