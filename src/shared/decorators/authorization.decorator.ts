import { AppAbility } from 'src/shared';
import { SetMetadata } from '@nestjs/common';

export interface IAuthorizationHandler {
  handle(ability: AppAbility): boolean;
}

type AuthorizationHandlerCallback = (ability: AppAbility) => boolean;

export type AuthorizationHandler =
  | IAuthorizationHandler
  | AuthorizationHandlerCallback;

export const AUTHORIZATION_METADATA_KEY = 'authorization_checks';
export const AuthorizationRequire = (...handlers: AuthorizationHandler[]) =>
  SetMetadata(AUTHORIZATION_METADATA_KEY, handlers);
