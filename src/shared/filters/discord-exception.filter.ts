import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ContextOf, NecordArgumentsHost, NecordInfoType } from 'necord';

import { DiscordUnauthorized } from '../exceptions';

@Catch(DiscordUnauthorized)
export class NecordExceptionsFilter
  implements ExceptionFilter<DiscordUnauthorized>
{
  public async catch(
    exception: DiscordUnauthorized,
    host: ArgumentsHost,
  ): Promise<boolean | void> {
    const necord_host = NecordArgumentsHost.create(host);
    const [interaction] =
      necord_host.getContext<ContextOf<'interactionCreate'>>();
    const { type } = necord_host.getInfo();

    if (!interaction.isCommand()) return true;

    return (
      type === NecordInfoType.SLASH_COMMANDS &&
      interaction.reply({ content: exception.message, ephemeral: true })
    );
  }
}
