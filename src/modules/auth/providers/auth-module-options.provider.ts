import { FactoryProvider } from '@nestjs/common';
import { AuthModuleAsyncOptions } from '@nestjs/passport';
import { AUTH_MODULE_OPTIONS } from '../shared/auth.constants';

export const authModuleOptionsProvider = (
  optionsAsync: AuthModuleAsyncOptions,
): FactoryProvider => ({
  provide: AUTH_MODULE_OPTIONS,
  inject: optionsAsync.inject || [],
  useFactory: optionsAsync.useFactory,
});
