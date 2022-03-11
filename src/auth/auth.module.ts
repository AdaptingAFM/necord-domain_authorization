import { DatabaseModule } from 'src/database';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
})
export class AuthModule {}
