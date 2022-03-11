import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Actions, AppAbility, Subjects } from 'src/shared';

import { Injectable } from '@nestjs/common';
import { Meeting } from './../../database/meetings/meeting.schema';
import { User } from 'src/database';

@Injectable()
export class CaslAbilityFactory {
  createForUser(usr: User) {
    const {
      can: allow,
      cannot: forbid,
      build,
    } = new AbilityBuilder<AppAbility>(Ability as AbilityClass<AppAbility>);

    if (usr.premium > 0) {
      allow(Actions.CREATE, Meeting, { user: usr, coach: { $ne: usr } });
      allow(Actions.UPDATE, Meeting, ['finished'], { user: usr });
      allow(Actions.UPDATE, Meeting, ['notes', 'finished'], {
        coach: usr,
        user: { $ne: usr },
      });
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
