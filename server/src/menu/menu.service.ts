import { Injectable } from '@nestjs/common';
import { Menu, Food, MenuItem } from './menu.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'



@Injectable()
export class MenuService {

  // constructor(@InjectModel('Menu') private readonly menuModel: Model<Menu>, @InjectModel('MenuItem') private readonly menuItemModel: Model<MenuItem>) {}
  
  //  async findOne (id:string): Promise<Menu> {
  //   return await this.menuModel.find(menu => menu.id === id);
  // }
  
  findOne (id:string) : Menu {
    return this.menu.find(item => item.id === id)
  }
  findAll(): MenuItem[] {
    const results = [];
    this.menu.forEach(menu => { 
      const res = {id: menu.id,title: menu.title}
      results.push(res)
    });
    return results
  }
  
  private readonly menu: Menu[] = [{
    id: '0',
    title: 'Pizza',
    items: [
      {
        id: '1',
        title:'Pepperoni',
        emoji:'🍕',
        additionalInfo:'Pepperoni and cheese',
        like:false
      },
      {
        id: '2',
        title:'Pepperoni & Chillis',
        emoji:'🌶',
        additionalInfo:'Pepperoni and Chilli',
        like:false
      },
      {
        id: '3',
        title:'Hawwiian',
        emoji:'🍍',
        additionalInfo:'Pineapple and Ham',
        like:false
      },
      {
        id: '4',
        title:'Veggie',
        emoji:'🥦',
        additionalInfo:'Broccoli and mushrooms',
        like:false
      },
      {
        id: '5',
        title:'Meat Feast',
        emoji:'🍖',
        additionalInfo:'Lots of meat',
        like:false
      },
      {
        id: '6',
        title:'Margarita',
        emoji:'🧀',
        additionalInfo:'Just cheese thankyou',
        like:false
      },
      {
        id: '7',
        title:'Tandoori Chicken',
        emoji:'🍗',
        additionalInfo:'Curried Chicken',
        like:false
      },
      {
        id: '8',
        title:'Parmaham',
        emoji:'🥓',
        additionalInfo:'Bacon but thinner',
        like:false
      },
      {
        id: '9',
        title:'Diavola',
        emoji:'🌭',
        additionalInfo:'Spicy pepperoni',
        like:false
      },
      {
        id: '10',
        title:'Tomato',
        emoji:'🍅',
        additionalInfo:'Tomato and Basil',
        like:false
      },
      
    ]
  },
  {
    id: '1',
    title: 'Takeaway',
    items: [
      {
        id: '1',
        title:'pizza',
        emoji:'🍕',
        additionalInfo:'Pepperoni, Hawaiian, Margarita',
        like:false
      },
      {
        id: '2',
        title:'thai',
        emoji:'🍜',
        additionalInfo:'Pad Thai, Papya Salad, Pad Seewo',
        like:false
      },
      {
        id: '3',
        title:'vietnamese',
        emoji:'🥪',
        additionalInfo:'Bahn Mi, Pho, Bun Bo',
        like:false
      },
      {
        id: '4',
        title:'sushi',
        emoji:'🍣',
        additionalInfo:'Tempura, Sushi, Udon',
        like:false
      },
      {
        id: '5',
        title:'burgers',
        emoji:'🍔',
        additionalInfo:'Chicken, Burgers, Milkshakes',
        like:false
      },
      {
        id: '6',
        title:'chinese',
        emoji:'🥡',
        additionalInfo:'Noodles, Dumplings, Rice',
        like:false
      },
      {
        id: '7',
        title:'fish&chips',
        emoji:'🐠',
        additionalInfo:'Fish, Chips, Battered Sausage',
        like:false
      },
      {
        id: '8',
        title:'kebab',
        emoji:'🧆',
        additionalInfo:'Donner, Dolmades, Spanicopita',
        like:false
      },
      {
        id: '9',
        title:'greek',
        emoji:'🌯',
        additionalInfo:'Shwarma, Souvlaki, Squid',
        like:false
      },
      {
        id: '10',
        title:'indian',
        emoji:'🍛',
        additionalInfo:'Madras, Briyana, Tandoori',
        like:false
      },
      
    ]
  }]


}

