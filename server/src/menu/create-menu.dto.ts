export class CreateMenuDto {
  readonly title: string;
  readonly items: FoodDto[];
}



export class FoodDto {
  readonly title: string;
  readonly emoji: string;
  readonly additionalInfo: string;
  readonly like: boolean;
}