import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  InferSubjects,
} from '@casl/ability';
import { Actions, AppAbility, Subjects } from 'src/shared';

import { Injectable } from '@nestjs/common';
import { User } from 'src/database';

@Injectable()
export class CaslAbilityFactory {
  createForUser(usr: User) {
    const {
      can: allow,
      cannot: forbid,
      build,
    } = new AbilityBuilder<AppAbility>(Ability as AbilityClass<AppAbility>);
  }
}
