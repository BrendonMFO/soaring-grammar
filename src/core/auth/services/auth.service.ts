import { JwtService } from '@nestjs/jwt';
import { Inject, Injectable } from '@nestjs/common';
import { GoogleUserDto } from '../dtos/google-user.dto';
import { AUTH_USER_SERVICE } from '../constants/auth-keys.constants';
import { AuthUserService } from '../interfaces/auth-user-service.interface';

@Injectable()
export class AuthService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;

  @Inject(AUTH_USER_SERVICE)
  private readonly authUserService: AuthUserService;

  async login(googleUserDto: GoogleUserDto): Promise<{ token: string }> {
    const apiUser = await this.authUserService.findOrSave(googleUserDto);
    const token = this.jwtService.sign({ id: apiUser.id });
    return { token };
  }
}
