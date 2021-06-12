import * as mongoose from "mongoose";
import { FoodSchema } from './food.schema'

export const MenuSchema = new mongoose.Schema({
  id:String,
  title: String,
  items:[FoodSchema]
})


