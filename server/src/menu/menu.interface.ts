export interface Food {
  title: string;
  emoji: string;
  additionalInfo: string;
  like: boolean;
}

export interface Menu {
  title: string;
  items: Food[];
}

export interface MenuItem {
  title: string;
}
