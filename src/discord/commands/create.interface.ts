import { BooleanOption, NumberOption, StringOption } from 'necord';
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

  @StringOption({
    name: 'coach_name',
    description: 'Name for this coach.',
    required: true,
  })
  real_name: string;
}
