import { IMeeting, IUser, MeetingTopics } from 'src/shared';

export class Meeting implements IMeeting {
  user: IUser;
  coach: IUser;
  id: string;
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
