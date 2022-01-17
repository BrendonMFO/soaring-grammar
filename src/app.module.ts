import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@core/auth/auth.module';
import { ApiConfigModule } from '@core/api-config/api-config.module';
import { DataUserModule } from '@data-layer/data-user/data-user.module';
import { GrammarDumpModule } from '@modules/grammar-dump/grammar-dump.module';
import { ApiConfigService } from '@core/api-config/services/api-config.service';
import { GrammarPhraseModule } from '@modules/grammar-phrase/grammar-phrase.module';
import { GrammarDatabaseModule } from '@modules/grammar-database/grammar-database.module';

@Module({
  imports: [
    ApiConfigModule,
    GrammarDumpModule,
    GrammarPhraseModule,
    GrammarDatabaseModule,
    AuthModule.forRootAsync(DataUserModule, {
      inject: [ApiConfigService],
      useFactory: ({
        authRedirect,
        authJwtOptions,
        authGoogleOptions,
      }: ApiConfigService) => ({
        authRedirect,
        authJwtOptions,
        authGoogleOptions,
      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ApiConfigService],
      useFactory: ({ databaseConfig }: ApiConfigService) => databaseConfig,
    }),
  ],
})
export class AppModule {}
