
export class CreateSessionDto {
  username:string;
  email:string;
  passwordHash:string;
  menuList:[string];
  friendsList:[string];
  sessionList:[string];
}

