import { JwtFromRequestFunction } from 'passport-jwt';

export interface AuthJwtConfig {
  readonly secretOrKey: string;
  readonly jwtExpiresIn: number;
  readonly defaultStrategy: string;
  readonly jwtFromRequest: JwtFromRequestFunction;
}
