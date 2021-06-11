
export class CreateUserDto {
  readonly username:string;
  readonly email:string;
  readonly passwordHash:string;
  readonly menuList:[string];
  readonly friendsList:[string];
  readonly sessionList:[string];
}

