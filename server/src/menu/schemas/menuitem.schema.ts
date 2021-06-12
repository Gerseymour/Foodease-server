import * as mongoose from "mongoose";


export const MenuItemSchema = new mongoose.Schema({
  id:String,
  title: String
})