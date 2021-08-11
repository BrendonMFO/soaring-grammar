import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { DynamicModule, Module } from '@nestjs/common';
import { UserModule } from '@modules/user/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthJwtStrategy } from './strategies/auth-jwt.strategy';
import { AuthGoogleStrategy } from './strategies/auth-google.strategy';
import { authJwtOptionsProvider } from './providers/auth-jwt-options.provider';
import { ApiConfigService } from '@modules/api-config/services/api-config.service';
import { authModuleOptionsProvider } from './providers/auth-module-options.provider';
import { authGoogleOptionsProvider } from './providers/auth-google-options.provider';
import { AuthModuleAsyncOptions } from './interfaces/auth-module-async-options.interface';

@Module({
  imports: [
    UserModule,
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
  providers: [AuthService, AuthGoogleStrategy, AuthJwtStrategy],
})
export class AuthModule {
  static forRootAsync(optionsAsync: AuthModuleAsyncOptions): DynamicModule {
    return {
      module: AuthModule,
      providers: [
        authJwtOptionsProvider(),
        authGoogleOptionsProvider(),
        authModuleOptionsProvider(optionsAsync),
      ],
    };
  }
}
