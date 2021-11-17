import { Strategy } from 'passport-google-oauth20';
import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { GoogleUserDto } from '../dtos/google-user.dto';
import { AUTH_GOOGLE_OPTIONS } from '../constants/auth-keys.constants';
import { AuthGuardType } from '../constants/auth-guard-type.constants';
import { AuthGoogleOptions } from '../interfaces/auth-google-options.interface';
import { AuthGoogleProfile } from '../interfaces/auth-google-profile.interface';

@Injectable()
export class AuthGoogleStrategy extends PassportStrategy(
  Strategy,
  AuthGuardType.GOOGLE,
) {
  constructor(
    @Inject(AUTH_GOOGLE_OPTIONS) googleModuleOptions: AuthGoogleOptions,
  ) {
    super(googleModuleOptions);
  }

  validate(
    accessToken: string,
    _refreshToken: string,
    profile: AuthGoogleProfile,
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
