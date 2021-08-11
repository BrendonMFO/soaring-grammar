import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { GrammarModule } from './grammar/grammar.module';
import { ApiConfigModule } from './api-config/api-config.module';
import { TranslationModule } from './translation/translation.module';
import { ApiConfigService } from './api-config/services/api-config.service';

@Module({
  imports: [
    UserModule,
    GrammarModule,
    ApiConfigModule,
    TranslationModule,
    TypeOrmModule.forRootAsync({
      inject: [ApiConfigService],
      useFactory: ({ databaseConfig }: ApiConfigService) => databaseConfig,
    }),
    AuthModule.forRootAsync({
      inject: [ApiConfigService],
      useFactory: ({
        authJwtOptions,
        authGoogleOptions,
      }: ApiConfigService) => ({
        authJwtOptions,
        authGoogleOptions,
      }),
    }),
  ],
})
export class AppModule {}
