import { ICoach } from 'src/shared';
import { IUser } from 'src/shared';

export class User implements IUser {
  premium: boolean;
  snowflake: string;
  name: string;
  isCoach: boolean;

  constructor({ premium, snowflake, name, isCoach = false }: User) {
    this.name = name;
    this.snowflake = snowflake;
    this.premium = premium;
    this.isCoach = isCoach;
  }
}

export class Coach extends User implements ICoach {
  snowflake: string;
  premium: boolean;
  name: string;
  isCoach: true;

  constructor({ premium, snowflake, name, isCoach }: Coach) {
    super({ premium, snowflake, name, isCoach: true });
  }
}
