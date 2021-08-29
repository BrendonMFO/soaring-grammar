import { ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ApiConfig } from '../interfaces/api-config.interface';
import { AuthJwtConfig } from '../interfaces/auth-jwt-config.interface';
import { RapidApiConfig } from '../interfaces/rapid-api-config.interface';
import { AuthRedirect } from '@core/auth/interfaces/auth-redirect.interface';
import { AuthGoogleOptions } from '../interfaces/auth-google-config.interface';

@Injectable()
export class ApiConfigService {
  constructor(private readonly configService: ConfigService) {}

  get apiConfig(): ApiConfig {
    return {
      port: this.configService.get<number>('API_PORT'),
    };
  }

  get databaseConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      synchronize: false,
      autoLoadEntities: true,
      host: this.configService.get('TYPEORM_HOST'),
      database: this.configService.get('TYPEORM_DATABASE'),
      port: this.configService.get<number>('TYPEORM_PORT'),
      username: this.configService.get('TYPEORM_USERNAME'),
      password: this.configService.get('TYPEORM_PASSWORD'),
      migrations: [this.configService.get('TYPEORM_MIGRATIONS')],
      logging: this.configService.get<boolean>('TYPEORM_LOGGING'),
      migrationsRun: this.configService.get<boolean>('TYPEORM_MIGRATIONS_RUN'),
    };
  }

  get rapidApiConfig(): RapidApiConfig {
    return {
      googleTranslate: {
        url: this.configService.get<string>('RAPID_API_GOOGLE_TRANSLATE_URL'),
        key: this.configService.get<string>('RAPID_API_GOOGLE_TRANSLATE_KEY'),
        host: this.configService.get<string>('RAPID_API_GOOGLE_TRANSLATE_HOST'),
      },
    };
  }

  get authJwtOptions(): AuthJwtConfig {
    return {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: this.configService.get<string>('AUTH_JWT_SECRET_KEY'),
      jwtExpiresIn: this.configService.get<number>('AUTH_JWT_EXPIRES_IN'),
      defaultStrategy: this.configService.get<string>('AUTH_JWT_STRATEGY'),
    };
  }

  get authGoogleOptions(): AuthGoogleOptions {
    return {
      scope: ['email', 'profile'],
      clientID: this.configService.get<string>('AUTH_GOOGLE_CLIENT_ID'),
      callbackURL: this.configService.get<string>('AUTH_GOOGLE_CALLBACK_URL'),
      clientSecret: this.configService.get<string>('AUTH_GOOGLE_SECRET_KEY'),
    };
  }

  get authRedirect(): AuthRedirect {
    return {
      url: this.configService.get<string>('AUTH_REDIRECT_URL'),
    };
  }
}
