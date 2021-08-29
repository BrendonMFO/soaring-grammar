import { JwtService } from '@nestjs/jwt';
import { Inject, Injectable } from '@nestjs/common';
import { GoogleUserDto } from '../dtos/google-user.dto';
import { AUTH_USER_SERVICE } from '../constants/auth-keys.constants';
import { AuthUserService } from '../interfaces/auth-user-service.interface';
import { AuthLoginResponse } from '../interfaces/auth-login-response.interface';

@Injectable()
export class AuthService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;

  @Inject(AUTH_USER_SERVICE)
  private readonly authUserService: AuthUserService;

  async login(googleUserDto: GoogleUserDto): Promise<AuthLoginResponse> {
    const apiUser = await this.authUserService.findOrSave(googleUserDto);
    const token = this.jwtService.sign({ id: apiUser.id });
    return { token, firstName: apiUser.firstName.toLowerCase() };
  }
}
