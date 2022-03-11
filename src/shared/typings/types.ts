import { Ability, InferSubjects } from '@casl/ability';
import { Meeting, User } from 'src/database';

import { Actions } from './enum';

export type Subjects = InferSubjects<typeof User | typeof Meeting> | 'all';

export type AppAbility = Ability<[Actions, Subjects]>;
