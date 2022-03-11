import { Coach, User } from '.';

export class UsersService {
  private users: User[] = [];
  private coaches: Coach[] = [];

  public fetchById(id: string): User | Coach | null {
    const usr = this.users.find((u) => u.snowflake === id);

    if (!usr) {
      const tmp = this.coaches.find((u) => u.snowflake === id);

      return tmp ?? null;
    }

    return usr;
  }

  public createUser(dto: User): User {
    const new_usr = new User(dto);

    this.users.push(new_usr);

    return new_usr;
  }

  public createCoach(dto: Coach): Coach {
    const new_coach = new Coach(dto);

    this.coaches.push(new_coach);

    return new_coach;
  }
}
