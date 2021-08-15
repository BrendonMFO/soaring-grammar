import {
  AUTH_JWT_OPTIONS,
  AUTH_USER_SERVICE,
} from '../constants/auth-keys.constants';
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { AuthUser } from '../interfaces/auth-user.interface';
import { AuthJwtOptions } from '../interfaces/auth-jwt-options.interface';
import { AuthUserService } from '../interfaces/auth-user-service.interface';

@Injectable()
export class AuthJwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject(AUTH_USER_SERVICE)
    private readonly authUserService: AuthUserService,
    @Inject(AUTH_JWT_OPTIONS) authJwtOptions: AuthJwtOptions,
  ) {
    super(authJwtOptions);
  }

  validate(payload: { id: number }): Promise<AuthUser> {
    return this.authUserService.findById(payload.id);
  }
}
