import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './core/auth/auth.module';
import { UserModule } from './core/user/user.module';
import { VocabModule } from './core/vocab/vocab.module';
import { GrammarModule } from '@core/grammar/grammar.module';
import { ApiConfigModule } from './core/api-config/api-config.module';
import { DataUserModule } from '@data-layer/data-user/data-user.module';
import { TranslationModule } from './core/translation/translation.module';
import { DataGrammarModule } from '@data-layer/data-grammar/data-grammar.module';
import { ApiConfigService } from './core/api-config/services/api-config.service';
import { DataVocabKindleModule } from '@data-layer/data-vocab-kindle/data-vocab-kindle.module';
import { TranslationGoogleRapidModule } from './data-layer/data-translation-google-rapid/data-translation-google-rapid.module';

@Module({
  imports: [
    ApiConfigModule,
    UserModule.forModule(DataUserModule),
    GrammarModule.forModule(DataGrammarModule),
    VocabModule.forModule(DataVocabKindleModule, DataGrammarModule),
    AuthModule.forRootAsync({
      inject: [ApiConfigService],
      userDataModule: DataUserModule,
      useFactory: ({
        authJwtOptions,
        authGoogleOptions,
      }: ApiConfigService) => ({
        authJwtOptions,
        authGoogleOptions,
      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ApiConfigService],
      useFactory: ({ databaseConfig }: ApiConfigService) => databaseConfig,
    }),
    TranslationModule.forModuleAsync(
      TranslationGoogleRapidModule.forRootAsync({
        inject: [ApiConfigService],
        useFactory: ({
          rapidApiConfig: { googleTranslate },
        }: ApiConfigService) => googleTranslate,
      }),
    ),
  ],
})
export class AppModule {}
