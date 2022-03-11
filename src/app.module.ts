import { AuthModule } from './auth';
import { DatabaseModule } from './database';
import { DiscordModule } from './discord';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, AuthModule, DiscordModule],
  providers: [],
})
export class AppModule {}
