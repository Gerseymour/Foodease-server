import * as mongoose from "mongoose";
import { FoodSchema } from '../../menu/schemas/food.schema'

export const SessionSchema = new mongoose.Schema({
  user_1:String,
  user_2:String,
  menu_id:String,
  user_1_isComplete:Boolean,
  user_2_isComplete:Boolean,
  decision:[FoodSchema]
})