import { ICoach } from './coach.interface';
import { IUser } from './user.interface';
import { MeetingTopics } from 'src/shared';

export interface IMeeting {
  user: IUser;
  coach: ICoach;
  id: string;
  topic: MeetingTopics;
  finished: boolean;
  notes: string;
}
