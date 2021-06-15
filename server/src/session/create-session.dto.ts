import { FoodDto } from '../menu/create-menu.dto'

export class CreateSessionDto {
  readonly user_1: string;
  readonly user_2: string;
  readonly menu_id: string;
  readonly user_1_isComplete: boolean;
  readonly user_2_isComplete: boolean;
  readonly user_1_decision: FoodDto[];
  readonly user_2_decision: FoodDto[];
}
