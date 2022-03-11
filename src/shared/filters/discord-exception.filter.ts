import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

import { BaseExceptionFilter } from '@nestjs/core';
import { DiscordUnauthorized } from '../exceptions';

@Catch(DiscordUnauthorized)
export class DiscordFilter
  extends BaseExceptionFilter
  implements ExceptionFilter
{
  catch(exception: DiscordUnauthorized, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}
