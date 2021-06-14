export interface User {
  username: string;
  email: string;
  passwordHash: string;
  verified: boolean;
  menuList: [string];
  friendsList: [string];
  sessionList: [string];
}
