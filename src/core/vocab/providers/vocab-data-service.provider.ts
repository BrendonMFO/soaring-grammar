import { ExistingProvider, Type } from '@nestjs/common';
import { VOCAB_DATA_SERVICE } from '../constants/vocab-keys.constants';
import { VocabDataService } from '../interfaces/vocab-data-service.interface';

export const vocabDataServiceProvider = (
  classType: Type<VocabDataService>,
): ExistingProvider => ({
  provide: VOCAB_DATA_SERVICE,
  useExisting: classType,
});
