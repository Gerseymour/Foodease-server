import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Food } from './food.schema'

export type SessionDocument = Session & Document;

@Schema()
export class Session extends Document{
  @Prop()
  user_1:string;

  @Prop()
  user_2: string

  @Prop()
  menu_id:string

  @Prop({default:false})
  user_1_isComplete:boolean

  @Prop({default:false})
  user_2_isComplete:boolean


  @Prop({type: Food})
  decision:[Food]
}

export const SessionSchema = SchemaFactory.createForClass(Session);