import { ICoach } from 'src/shared';
import { IUser } from 'src/shared';

export class User implements IUser {
  premium: boolean;
  snowflake: string;
  name: string;

  constructor({ premium, snowflake, name }: User) {
    this.name = name;
    this.snowflake = snowflake;
    this.premium = premium;
  }
}

export class Coach extends User implements ICoach {
  real_name: string;
  snowflake: string;
  premium: boolean;
  name: string;

  constructor({ premium, snowflake, name, real_name }: Coach) {
    super({ premium, snowflake, name });
    this.real_name = real_name;
  }
}
