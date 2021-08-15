import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { DynamicModule, Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthJwtStrategy } from './strategies/auth-jwt.strategy';
import { AuthGoogleStrategy } from './strategies/auth-google.strategy';
import { authUserService } from './providers/auth-user-service.provider';
import { USER_DATA_SERVICE } from '@core/user/constants/user-keys.constants';
import { ApiConfigService } from '../api-config/services/api-config.service';
import { authJwtOptionsProvider } from './providers/auth-jwt-options.provider';
import { authModuleOptionsProvider } from './providers/auth-module-options.provider';
import { authGoogleOptionsProvider } from './providers/auth-google-options.provider';
import { AuthModuleAsyncOptions } from './interfaces/auth-module-async-options.interface';

@Module({
  imports: [
    PassportModule.registerAsync({
      inject: [ApiConfigService],
      useFactory: ({ authJwtOptions }: ApiConfigService) => ({
        defaultStrategy: authJwtOptions.defaultStrategy,
      }),
    }),
    JwtModule.registerAsync({
      inject: [ApiConfigService],
      useFactory: ({ authJwtOptions }: ApiConfigService) => ({
        secret: authJwtOptions.secretOrKey,
        signOptions: { expiresIn: authJwtOptions.jwtExpiresIn },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthJwtStrategy,
    AuthGoogleStrategy,
    authJwtOptionsProvider(),
    authGoogleOptionsProvider(),
    authUserService(USER_DATA_SERVICE),
  ],
})
export class AuthModule {
  static forRootAsync(optionsAsync: AuthModuleAsyncOptions): DynamicModule {
    return {
      module: AuthModule,
      imports: [UserModule.forModule(optionsAsync.userDataModule)],
      controllers: [AuthController],
      providers: [authModuleOptionsProvider(optionsAsync)],
    };
  }
}
