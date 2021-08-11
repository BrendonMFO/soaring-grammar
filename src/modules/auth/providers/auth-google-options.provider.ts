import {
  AUTH_GOOGLE_OPTIONS,
  AUTH_MODULE_OPTIONS,
} from '../shared/auth.constants';
import { FactoryProvider } from '@nestjs/common';
import { AuthGoogleOptions } from '../interfaces/auth-google-options.interface';
import { AuthModuleOptions } from '../interfaces/auth-module-options.interface';

export const authGoogleOptionsProvider = (): FactoryProvider => ({
  provide: AUTH_GOOGLE_OPTIONS,
  inject: [AUTH_MODULE_OPTIONS],
  useFactory: ({ authGoogleOptions }: AuthModuleOptions): AuthGoogleOptions =>
    authGoogleOptions,
});
