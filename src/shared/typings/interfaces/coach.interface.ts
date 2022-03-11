import { IUser } from './user.interface';

export interface ICoach extends IUser {
  isCoach: true;
}
