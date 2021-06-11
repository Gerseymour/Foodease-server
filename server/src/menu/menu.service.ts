import { Injectable } from '@nestjs/common';
// import { Menu } from 'src/Model/schemas/menu.schema';
import { Menu, Food } from './menu.interface'

@Injectable()
export class MenuService {


  private readonly menu: Menu[] = [{
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

  findAll (): Food[] {
    return this.menu[0].items;
  }



}

