import { IUser } from 'src/shared';

export class User implements IUser {
  premium: number;
  snowflake: string;
  name: string;

  constructor({ premium, snowflake, name }: User) {
    this.name = name;
    this.snowflake = snowflake;
    this.name = name;
  }
}
