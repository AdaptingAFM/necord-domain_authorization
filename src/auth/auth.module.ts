import { AuthService } from './services';
import { CaslAbilityFactory } from './casl';
import { DatabaseModule } from 'src/database';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [AuthService, CaslAbilityFactory],
  exports: [
    { provide: 'SRV:AUTH', useClass: AuthService },
    { provide: 'SRV:CASL', useClass: CaslAbilityFactory },
  ],
})
export class AuthModule {}
