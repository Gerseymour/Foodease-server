import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document;

@Schema()
export class User{
  @Prop()
  username:string;

  @Prop()
  email: string

  @Prop()
  passwordHash: string

  @Prop()
  menuList:[string]

  @Prop()
  friendsList:[string]

  @Prop()
  sessionList:[string]
}

export const UserSchema = SchemaFactory.createForClass(User);