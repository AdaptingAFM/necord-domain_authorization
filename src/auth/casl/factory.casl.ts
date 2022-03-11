import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
} from '@casl/ability';
import { Actions, AppAbility, Subjects } from 'src/shared';
import { Meeting, User } from 'src/database';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CaslAbilityFactory {
  createForUser(usr: User) {
    const { can: allow, build } = new AbilityBuilder<AppAbility>(
      Ability as AbilityClass<AppAbility>,
    );

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
