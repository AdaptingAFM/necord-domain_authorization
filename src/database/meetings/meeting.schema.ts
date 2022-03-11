import { Coach, User } from '../users';
import { IMeeting, MeetingTopics } from 'src/shared';

export class Meeting implements IMeeting {
  id: string;
  user: User;
  coach: Coach;
  topic: MeetingTopics;
  finished: boolean;
  notes: string;

  constructor({ user, coach, finished, notes, id, topic }: Meeting) {
    this.coach = coach;
    this.user = user;
    this.topic = topic;
    this.id = id;
    this.finished = finished;
    this.notes = notes;
  }
}
