import { AuthorizationHandler } from 'src/shared';
import { SetMetadata } from '@nestjs/common';

export const AUTHORIZATION_METADATA_KEY = 'authorization_checks';
export const AuthorizationRequire = (...handlers: AuthorizationHandler[]) =>
  SetMetadata(AUTHORIZATION_METADATA_KEY, handlers);
