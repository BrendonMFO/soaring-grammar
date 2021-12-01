import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@core/auth/auth.module';
import { DumpModule } from '@core/dump/dump.module';
import { UserModule } from '@core/user/user.module';
import { VocabModule } from '@core/vocab/vocab.module';
import { SpeechModule } from '@core/speech/speech.module';
import { GrammarModule } from '@core/grammar/grammar.module';
import { PhraseModule } from '@modules/phrase/phrase.module';
import { DataLayerModule } from '@core/data-layer/data-layer.module';
import { ApiConfigModule } from '@core/api-config/api-config.module';
import { DataUserModule } from '@data-layer/data-user/data-user.module';
import { DataDumpModule } from '@data-layer/data-dump/data-dump.module';
import { TranslationModule } from '@core/translation/translation.module';
import { GrammarDumpModule } from '@modules/grammar-dump/grammar-dump.module';
import { ApiConfigService } from '@core/api-config/services/api-config.service';
import { DataGrammarModule } from '@data-layer/data-grammar/data-grammar.module';
import { GrammarDatabaseModule } from '@modules/grammar-database/grammar-database.module';
import { DataVocabKindleModule } from '@data-layer/data-vocab-kindle/data-vocab-kindle.module';
import { DataSpeechGoogleModule } from '@data-layer/data-speech-google/data-speech-google.module';
import { DataTranslationGoogleModule } from '@data-layer/data-translation-google/data-translation-google.module';

@Module({
  imports: [
    UserModule,
    DumpModule,
    VocabModule,
    SpeechModule,
    PhraseModule,
    GrammarModule,
    ApiConfigModule,
    TranslationModule,
    GrammarDumpModule,
    GrammarDatabaseModule,
    DataLayerModule.forModules([
      DataUserModule,
      DataDumpModule,
      DataGrammarModule,
      DataVocabKindleModule,
      DataSpeechGoogleModule,
      DataTranslationGoogleModule,
    ]),
    AuthModule.forRootAsync({
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
