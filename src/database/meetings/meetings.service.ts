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

  public update(dto: Meeting): Meeting | null {
    let mtn = this.meetings.find((m) => m.id === dto.id);

    if (!mtn) return null;

    const idx = this.meetings.indexOf(mtn);

    this.meetings.splice(idx, 1);
    mtn = { ...dto };
    this.meetings.push(mtn);

    return mtn;
  }
}
