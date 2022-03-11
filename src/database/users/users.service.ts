import { User } from '.';

export class UsersService {
  private users: User[] = [];

  public fetchById(id: string): User | null {
    const tmp = this.users.find((u) => u.snowflake === id);

    if (!tmp) return null;

    return tmp;
  }

  public create(dto: User): User {
    const new_usr = new User(dto);

    this.users.push(new_usr);

    return new_usr;
  }
}
