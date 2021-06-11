import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('menu')
export class MenuController {
  @Get()
  findAll(): string {
    return 'get all items';
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
