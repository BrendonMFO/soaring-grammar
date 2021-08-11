import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { AUTH_JWT_OPTIONS } from '../shared/auth.constants';
import { UserEntity } from '@modules/user/entities/user.entity';
import { UserService } from '@modules/user/services/user.service';
import { AuthJwtOptions } from '../interfaces/auth-jwt-options.interface';

@Injectable()
export class AuthJwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly userService: UserService,
    @Inject(AUTH_JWT_OPTIONS) authJwtOptions: AuthJwtOptions,
  ) {
    super(authJwtOptions);
  }

  validate(payload: { id: number }): Promise<UserEntity> {
    return this.userService.find({ id: payload.id });
  }
}
