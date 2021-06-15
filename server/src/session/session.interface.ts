import { Food } from '../menu/menu.interface'

export interface Session {
  user_1: string;
  user_2: string;
  menu_id: string;
  user_1_isComplete: boolean;
  user_2_isComplete: boolean;
  user_1_decisions: Food[];
  user_2_decisions: Food[];
  final: Food;
}