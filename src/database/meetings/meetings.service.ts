import { Injectable } from '@nestjs/common';
import { Meeting } from './meeting.schema';

@Injectable()
export class MeetingsService {
  private meetings: Meeting[] = [];

  public fetchById(id: string): Meeting | null {
    const tmp = this.meetings.find((u) => u.id === id);

    if (!tmp) return null;

    return tmp;
  }

  public create(dto: Meeting): Meeting {
    const new_usr = new Meeting(dto);

    this.meetings.push(new_usr);

    return new_usr;
  }
}
