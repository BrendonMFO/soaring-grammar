export const AUTH_MODULE_OPTIONS = Symbol('__auth_module_options__');

export const AUTH_JWT_OPTIONS = Symbol('__auth_jwt_options__');

export const AUTH_GOOGLE_OPTIONS = Symbol('__auth_google_options__');

export enum AuthGuardType {
  JWT = 'jwt',
  GOOGLE = 'google',
}
