import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type FoodDocument = Food & Document;

@Schema()
export class Food{
  @Prop()
  title:string;

  @Prop()
  image: string

  @Prop()
  additionalInfo:string
  
  @Prop()
  like:Boolean
}

export const FoodSchema = SchemaFactory.createForClass(Food);