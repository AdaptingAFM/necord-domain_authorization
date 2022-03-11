import { AuthModule } from './../auth/auth.module';
import { DatabaseModule } from 'src/database';
import { Intents } from 'discord.js';
import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    NecordModule.forRoot({
      token: process.env.TOKEN,
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
      ],
    }),
  ],
  providers: [],
})
export class DiscordModule {}
