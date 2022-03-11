import { AppAbility } from 'src/shared';

export interface IAuthorizationHandler {
  handle(ability: AppAbility): boolean;
}

type AuthorizationHandlerCallback = (ability: AppAbility) => boolean;

export type AuthorizationHandler =
  | IAuthorizationHandler
  | AuthorizationHandlerCallback;
