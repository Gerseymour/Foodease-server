import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { MenuSchema } from './Schemas/menu.schema';
import { FoodSchema } from './Schemas/food.schema';
import { MenuItemSchema } from './Schemas/menuitem.schema'


@Module({
  imports: [MongooseModule.forFeature([{name:'Menu', schema:MenuSchema}, {name: 'MenuItem', schema:MenuItemSchema}, {name: 'Food', schema: FoodSchema}])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}