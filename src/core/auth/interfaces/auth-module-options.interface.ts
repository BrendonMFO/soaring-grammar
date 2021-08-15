import { AuthJwtOptions } from './auth-jwt-options.interface';
import { AuthGoogleOptions } from './auth-google-options.interface';

export interface AuthModuleOptions {
  readonly authJwtOptions: AuthJwtOptions;
  readonly authGoogleOptions: AuthGoogleOptions;
}
