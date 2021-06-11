import * as mongoose from 'mongoose'
require('dotenv').config();


export const databaseProvider = [ 
  {
    provider: 'DATABASE_CONNECTION',
    useFactory: ():void => {
      try {
        console.log('db connection made')
        mongoose.connect(`mongodb://localhost:27017/${process.env.DB_name}`)
      }catch(err) {
        console.log('database connection error', err)
      }
    }
  }
]