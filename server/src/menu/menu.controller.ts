import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { CreateMenuDto } from './create-menu.dto';
import { MenuService } from './menu.service';
import { Menu, Food, MenuItem } from './menu.interface';


@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {};


  @Get(':id')
  async findOne(@Param('id') id): Promise<Menu[]> {
    return this.menuService.findOne(id);
  }

  // @Get()
  // findAll(): MenuItem[] {
  //   return this.menuService.findAll();
  // }

  // @Post()
  // createMenu(): string {
  //   return 'new menu';
  // }

  // @Put()
  // addToMenu(): string {
  //   return 'added to menu';
  // }

  // @Delete()
  // deleteMenu(): string {
  //   return 'menu delete';
  // }
}
