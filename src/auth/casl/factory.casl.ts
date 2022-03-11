import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
} from '@casl/ability';
import { Actions, AppAbility, Subjects } from 'src/shared';
import { Coach, Meeting, User } from 'src/database';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CaslAbilityFactory {
  createForUser(usr: User | Coach) {
    const { can: allow, build } = new AbilityBuilder<AppAbility>(
      Ability as AbilityClass<AppAbility>,
    );

    if (usr instanceof Coach) {
      allow(Actions.UPDATE, Meeting, ['notes'], { coach: usr });
    } else {
      allow(Actions.CREATE, Meeting, { user: usr });
      allow(Actions.UPDATE, Meeting, ['finished'], { user: usr });
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
