import { Injectable, Inject } from '@nestjs/common';
import { Menu, Food, MenuItem } from './menu.interface';
import { CreateMenuDto } from './create-menu.dto'
import * as mongoose from 'mongoose';
import { MenuSchema } from './schemas/menu.schema';
import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class MenuService {
  constructor(@Inject('Menu_MODEL') private menuModel: mongoose.Model<Menu>) {}

  async findOne(id: string): Promise<Menu> {
    return await this.menuModel.findOne({ _id: id });
  }

  async findAll(): Promise<Menu[]> {
    return await this.menuModel.find();
  }

  async create(menu: Menu): Promise<Menu> {
    const createdMenu = new this.menuModel(menu);
    console.log(createdMenu);
    return await createdMenu.save();
  }
}
