import * as mongoose from 'mongoose';

export const FoodSchema = new mongoose.Schema({
  title: String,
  emoji: String,
  additionalInfo: String,
  like: Boolean,
})