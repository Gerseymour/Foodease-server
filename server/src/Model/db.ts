import * as mongoose from 'mongoose'
require('dotenv').config();


export const databaseProvider = [ 
  {
    provider: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => 
      mongoose.connect(`mongodb://localhost:27017/${process.env.DB_name}`)
  }
]