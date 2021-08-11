import {
  AUTH_JWT_OPTIONS,
  AUTH_MODULE_OPTIONS,
} from '../shared/auth.constants';
import { FactoryProvider } from '@nestjs/common';
import { AuthJwtOptions } from '../interfaces/auth-jwt-options.interface';
import { AuthModuleOptions } from '../interfaces/auth-module-options.interface';

export const authJwtOptionsProvider = (): FactoryProvider => ({
  provide: AUTH_JWT_OPTIONS,
  inject: [AUTH_MODULE_OPTIONS],
  useFactory: ({ authJwtOptions }: AuthModuleOptions): AuthJwtOptions =>
    authJwtOptions,
});
