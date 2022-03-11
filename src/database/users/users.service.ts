import { Coach, User } from '.';

export class UsersService {
  private users: Array<User | Coach> = [];

  public fetchById(id: string): User | Coach | null {
    const tmp = this.users.find((u) => u.snowflake === id);

    if (!tmp) return null;

    return tmp;
  }

  public create(dto: User | Coach): User | Coach {
    const new_usr = new User(dto);

    this.users.push(new_usr);

    return new_usr;
  }
}
