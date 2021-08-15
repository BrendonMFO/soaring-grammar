import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { TranslationGoogleRapidService } from './services/translation-google-rapid.service';
import { TRANSLATION_SERVICE } from '@core/translation/constants/translation-keys.constants';
import { TRANSLATION_GOOGLE_RAPID_OPTIONS } from './constants/translation-google-rapid-keys.constants';
import { TranslationGoogleRapidOptions } from './interfaces/translation-google-rapid-options.interface';
import { translationGoogleRapidOptionsProvider } from './providers/translation-google-rapid-options.provider';
import { translationDataServiceProvider } from '@core/translation/providers/translation-data-service.provider';
import { TranslationGoogleRapidAsyncOptions } from './interfaces/translation-google-rapid-async-options.interface';

@Module({})
export class TranslationGoogleRapidModule {
  static forRootAsync(
    options: TranslationGoogleRapidAsyncOptions,
  ): DynamicModule {
    return {
      module: TranslationGoogleRapidModule,
      imports: [
        HttpModule.registerAsync({
          inject: [TRANSLATION_GOOGLE_RAPID_OPTIONS],
          useFactory: (options: TranslationGoogleRapidOptions) => ({
            baseURL: options.url,
            headers: {
              'x-rapidapi-key': options.key,
              'x-rapidapi-host': options.host,
              'content-type': 'application/x-www-form-urlencoded',
            },
          }),
          extraProviders: [translationGoogleRapidOptionsProvider(options)],
        }),
      ],
      providers: [
        TranslationGoogleRapidService,
        translationDataServiceProvider(TranslationGoogleRapidService),
      ],
      exports: [TRANSLATION_SERVICE],
    };
  }
}
