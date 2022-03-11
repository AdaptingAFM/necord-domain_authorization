import { APP_FILTER } from '@nestjs/core';
import { AuthModule } from './auth';
import { DatabaseModule } from './database';
import { DiscordFilter } from './shared/filters/discord-exception.filter';
import { DiscordModule } from './discord';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, AuthModule, DiscordModule],
  providers: [{ provide: APP_FILTER, useClass: DiscordFilter }],
})
export class AppModule {}
