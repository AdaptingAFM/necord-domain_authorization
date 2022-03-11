import { MeetingTopics } from 'src/shared';
import { StringOption } from 'necord';

export class CreateMeetingDTO {
  @StringOption({
    name: 'as_user',
    description: 'User identifier to interact as',
    required: true,
  })
  user: string;

  @StringOption({
    name: 'meet_id',
    description: 'Identifier for the meeting.',
    required: true,
  })
  id: string;

  @StringOption({
    name: 'meet_coach',
    description:
      'Identifier to discriminate which user is going to be the coach.',
    required: true,
  })
  coach: string;

  @StringOption({
    name: 'meet_topic',
    description: 'The topic of this meeting.',
    choices: [
      { name: MeetingTopics.MENTAL_HEALTH, value: MeetingTopics.MENTAL_HEALTH },
      { name: MeetingTopics.RELATIONSHIPS, value: MeetingTopics.RELATIONSHIPS },
      {
        name: MeetingTopics.PHYSICAL_HEALTH,
        value: MeetingTopics.PHYSICAL_HEALTH,
      },
      {
        name: MeetingTopics.NEURODIVERGENCE,
        value: MeetingTopics.NEURODIVERGENCE,
      },
    ],
    required: true,
  })
  topic: MeetingTopics;
}

export class FinishMeetingDTO {
  @StringOption({
    name: 'as_user',
    description: 'User identifier to interact as',
    required: true,
  })
  user: string;

  @StringOption({
    name: 'meet_id',
    description: 'Identifier for the meeting.',
    required: true,
  })
  id: string;

  finished: false;
}

export class UpdateMeetingDTO {
  @StringOption({
    name: 'as_user',
    description: 'User identifier to interact as',
    required: true,
  })
  user: string;

  @StringOption({
    name: 'meet_id',
    description: 'Identifier for the meeting.',
    required: true,
  })
  id: string;

  @StringOption({
    name: 'meet_notes',
    description: 'Notes attached to this meeting.',
    required: true,
  })
  notes: string;
}
