import { NumberOption, StringOption } from 'necord';

import { User } from 'src/database';

export class CreateUserDto implements User {
  @NumberOption({
    name: 'user_premium_level',
    description: 'Level for this new user.',
    required: true,
    min_value: 0,
    max_value: 5,
  })
  premium: number;

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
