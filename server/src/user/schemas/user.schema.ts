import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  passwordHash: String,
  verified: Boolean,
  menuList: [String],
  friendsList: [String],
  sessionList: [String],
})