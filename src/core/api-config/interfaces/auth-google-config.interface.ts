export interface AuthGoogleOptions {
  readonly clientID: string;
  readonly clientSecret: string;
  readonly callbackURL: string;
  readonly scope: ['email', 'profile'];
}
