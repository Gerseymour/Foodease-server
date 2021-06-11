import {Food} from '../menu/create-menu.dto'

export class CreateSessionDto {
  user_1:string;
  user_2:string;
  menu_id:string;
  user_1_isComplete:boolean;
  user_2_isComplete:boolean;
  decision:[Food]
}

