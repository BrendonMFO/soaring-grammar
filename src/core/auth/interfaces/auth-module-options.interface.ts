import { AuthJwtOptions } from './auth-jwt-options.interface';
import { AuthGoogleOptions } from './auth-google-options.interface';
import { AuthRedirect } from './auth-redirect.interface';

export interface AuthModuleOptions {
  readonly authRedirect: AuthRedirect;
  readonly authJwtOptions: AuthJwtOptions;
  readonly authGoogleOptions: AuthGoogleOptions;
}
