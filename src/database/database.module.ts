import { MeetingsService } from './meetings';
import { Module } from '@nestjs/common';
import { UsersService } from './users';

@Module({
  providers: [UsersService, MeetingsService],
  exports: [
    {
      provide: 'SRV:USERS',
      useClass: UsersService,
    },
    {
      provide: 'SRV:MEETINGS',
      useClass: MeetingsService,
    },
  ],
})
export class DatabaseModule {}
