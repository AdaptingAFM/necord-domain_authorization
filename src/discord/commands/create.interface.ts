import { BooleanOption, StringOption } from 'necord';
import { Coach, User } from 'src/database';

export class CreateUserDto implements User {
  @BooleanOption({
    name: 'user_ispremium',
    description: 'Premium state for this user.',
    required: true,
  })
  premium: boolean;

  @StringOption({
    name: 'user_snowflake',
    description: 'Identifier for this user.',
    required: true,
  })
  snowflake: string;

  @StringOption({
    name: 'user_username',
    description: 'Name for this user.',
    required: true,
  })
  name: string;

  isCoach: false;
}

export class CreateCoachDto implements Coach {
  @BooleanOption({
    name: 'user_ispremium',
    description: 'Premium state for this user.',
    required: true,
  })
  premium: boolean;

  @StringOption({
    name: 'user_snowflake',
    description: 'Identifier for this user.',
    required: true,
  })
  snowflake: string;

  @StringOption({
    name: 'user_username',
    description: 'Name for this user.',
    required: true,
  })
  name: string;

  isCoach: true;
}
