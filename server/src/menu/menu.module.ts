
import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { MenuSchema } from './Schemas/menu.schema';
import { FoodSchema } from './Schemas/food.schema';
import { MenuItemSchema } from './Schemas/menuitem.schema'
import { DatabaseModule } from '../Model/database.module'
import { menuProviders } from './menu.providers'


@Module({
  imports: [DatabaseModule],
  controllers: [MenuController],
  providers: [MenuService, ...menuProviders],
})
export class MenuModule {}
