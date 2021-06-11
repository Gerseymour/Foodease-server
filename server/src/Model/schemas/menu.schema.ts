import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Food } from './food.schema'

export type MenuDocument = Menu & Document;

@Schema()
export class Menu extends Document{
  @Prop()
  title:string;

  @Prop({type:Food})
  items:[Food];
}

export const MenuSchema = SchemaFactory.createForClass(Menu);