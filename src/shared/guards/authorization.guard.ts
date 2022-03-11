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

    return true;
  }
}
