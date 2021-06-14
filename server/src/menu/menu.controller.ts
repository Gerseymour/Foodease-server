import {
  Controller,
  Get,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { CreateMenuDto } from './create-menu.dto';
import { MenuService } from './menu.service';
import { Menu, Food, MenuItem } from './menu.interface';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {};


  @Get(':id')
  async findOne(@Param('id') id): Promise<Menu> {
    return this.menuService.findOne(id);
  }

  @Get()
  async findAll(): Promise<MenuItem[]> {
    return this.menuService.findAll();
  }

  @Post()
  async create(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menuService.create(createMenuDto);
  }

  // @Put()
  // addToMenu(): string {
  //   return 'added to menu';
  // }

  // @Delete()
  // deleteMenu(): string {
  //   return 'menu delete';
  // }
}
