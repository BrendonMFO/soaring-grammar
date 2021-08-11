import { Strategy } from 'passport-google-oauth20';
import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { GoogleUserDto } from '../dtos/google-user.dto';
import { AUTH_GOOGLE_OPTIONS } from '../shared/auth.constants';
import { AuthGoogleOptions } from '../interfaces/auth-google-options.interface';

@Injectable()
export class AuthGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @Inject(AUTH_GOOGLE_OPTIONS) googleModuleOptions: AuthGoogleOptions,
  ) {
    super(googleModuleOptions);
  }

  validate(
    accessToken: string,
    _refreshToken: string,
    profile: {
      id: string;
      emails: { value: string }[];
      name: { givenName: string; familyName: string };
    },
  ): GoogleUserDto {
    const { id, name, emails } = profile;
    return {
      accessToken,
      googleId: id,
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
    };
  }
}
