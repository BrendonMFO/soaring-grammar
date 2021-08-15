import { FactoryProvider } from '@nestjs/common';
import { TRANSLATION_GOOGLE_RAPID_OPTIONS } from '../constants/translation-google-rapid-keys.constants';
import { TranslationGoogleRapidAsyncOptions } from '../interfaces/translation-google-rapid-async-options.interface';

export const translationGoogleRapidOptionsProvider = (
  optionsAsync: TranslationGoogleRapidAsyncOptions,
): FactoryProvider => ({
  provide: TRANSLATION_GOOGLE_RAPID_OPTIONS,
  inject: optionsAsync.inject || [],
  useFactory: optionsAsync.useFactory,
});
