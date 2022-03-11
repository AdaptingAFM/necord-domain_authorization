import { AUTHORIZATION_METADATA_KEY } from './../decorators/authorization.decorator';
import {
  AppAbility,
  AuthorizationHandler,
  DiscordUnauthorized,
} from 'src/shared';
import { CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CommandInteraction } from 'discord.js';
import { NecordExecutionContext } from 'necord';
import { AuthService, CaslAbilityFactory } from 'src/auth';

export class SlashCommandsAuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject('SRV:AUTH') private readonly auth: AuthService,
    @Inject('SRV:CASL') private readonly casl: CaslAbilityFactory,
  ) {}

  public canActivate(context: ExecutionContext): boolean {
    const [interaction] =
      NecordExecutionContext.create(context).getContext<CommandInteraction[]>();

    const abilities_required =
      this.reflector.get<AuthorizationHandler[]>(
        AUTHORIZATION_METADATA_KEY,
        context.getHandler(),
      ) || [];

    const usr = this.auth.findBySnowflake(
      interaction.options.getString('as_user', true),
    );

    if (!usr) throw new DiscordUnauthorized(interaction);

    const usr_abilities = this.casl.createForUser(usr);

    if (
      abilities_required.every((requirement) =>
        this.execAuthorizationHandler(requirement, usr_abilities),
      )
    )
      return true;

    throw new DiscordUnauthorized(interaction);
  }

  private execAuthorizationHandler(
    handler: AuthorizationHandler,
    ability: AppAbility,
  ) {
    if (typeof handler === 'function') {
      return handler(ability);
    }
    return handler.handle(ability);
  }
}
