import { Inject, Injectable } from '@nestjs/common';
import { User, UsersService } from 'src/database';

@Injectable()
export class AuthService {
  constructor(@Inject('SRV:USERS') private readonly users: UsersService) {}

  public findBySnowflake(id: string): User | null {
    return this.users.fetchById(id);
  }
}
