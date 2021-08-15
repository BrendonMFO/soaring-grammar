import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { GoogleUserDto } from '../dtos/google-user.dto';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthUser } from '../decorators/auth-user.decorator';
import { AuthGuardType } from '../constants/auth-guard-type.constants';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @UseGuards(AuthGuard(AuthGuardType.GOOGLE))
  login(@AuthUser() user: GoogleUserDto): Promise<{ token: string }> {
    return this.authService.login(user);
  }
}
