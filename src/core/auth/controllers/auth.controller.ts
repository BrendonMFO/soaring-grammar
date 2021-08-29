import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { GoogleUserDto } from '../dtos/google-user.dto';
import { AuthUser } from '../decorators/auth-user.decorator';
import { AuthGuardType } from '../constants/auth-guard-type.constants';
import { AUTH_MODULE_OPTIONS } from '../constants/auth-keys.constants';
import { Controller, Get, Inject, Redirect, UseGuards } from '@nestjs/common';
import { AuthModuleOptions } from '../interfaces/auth-module-options.interface';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  @Inject(AUTH_MODULE_OPTIONS)
  private readonly authModuleOptions: AuthModuleOptions;

  @Redirect()
  @Get('login')
  @UseGuards(AuthGuard(AuthGuardType.GOOGLE))
  async login(@AuthUser() user: GoogleUserDto): Promise<{ url: string }> {
    const { token, firstName } = await this.authService.login(user);
    return {
      url: `${this.authModuleOptions.authRedirect.url}?token=${token}&firstName=${firstName}`,
    };
  }
}
