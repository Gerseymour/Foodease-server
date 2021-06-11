import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { CreateMenuDto } from './create-menu.dto'
import { MenuService } from './menu.service'
import { Menu, Food } from './menu.interface'


@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}


  @Get()
  findAll(): Food[] {
    return this.menuService.findAll();
  }

  @Post()
  createMenu(): string {
    return 'new menu';
  }

  @Put()
  addToMenu(): string {
    return 'added to menu';
  }

  @Delete()
  deleteMenu(): string {
    return 'menu delete';
  }
}
