import { JwtFromRequestFunction } from 'passport-jwt';

export interface AuthJwtOptions {
  readonly secretOrKey: string;
  readonly jwtExpiresIn: number;
  readonly defaultStrategy: string;
  readonly jwtFromRequest: JwtFromRequestFunction;
}
