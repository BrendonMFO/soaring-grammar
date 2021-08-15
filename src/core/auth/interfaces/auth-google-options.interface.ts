export interface AuthGoogleOptions {
  readonly scope: string[];
  readonly clientID: string;
  readonly clientSecret: string;
  readonly callbackURL: string;
}
