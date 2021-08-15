import { ExistingProvider, Type } from '@nestjs/common';
import { TRANSLATION_DATA_SERVICE } from '../constants/translation-keys.constants';
import { TranslationDataService } from '../interfaces/translation-data-service.interface';

export const translationDataServiceProvider = (
  classType: Type<TranslationDataService>,
): ExistingProvider => ({
  provide: TRANSLATION_DATA_SERVICE,
  useExisting: classType,
});
