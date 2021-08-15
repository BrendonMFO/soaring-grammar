import { Module } from '@nestjs/common';
import { DataTranslationGoogleService } from './services/data-translation-google.service';
import { TRANSLATION_DATA_SERVICE } from '@core/translation/constants/translation-keys.constants';
import { googleTranslateProvider } from './providers/data-translation-google-translate.provider';
import { translationDataServiceProvider } from '@core/translation/providers/translation-data-service.provider';

@Module({
  providers: [
    googleTranslateProvider(),
    DataTranslationGoogleService,
    translationDataServiceProvider(DataTranslationGoogleService),
  ],
  exports: [TRANSLATION_DATA_SERVICE],
})
export class DataTranslationGoogleModule {}
