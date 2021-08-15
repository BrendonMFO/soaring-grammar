import { ExistingProvider, Type } from '@nestjs/common';
import { AUTH_USER_SERVICE } from '../constants/auth-keys.constants';
import { AuthUserService } from '../interfaces/auth-user-service.interface';

export const authUserService = (
  serviceClass: symbol | Type<AuthUserService>,
): ExistingProvider => ({
  provide: AUTH_USER_SERVICE,
  useExisting: serviceClass,
});
