import { ExistingProvider, Type } from '@nestjs/common';
import { GRAMMAR_DATA_SERVICE } from '../constants/grammar-keys.constants';
import { GrammarDataService } from '../interfaces/grammar-data-service.interface';

export const grammarDataServiceProvider = (
  classType: Type<GrammarDataService>,
): ExistingProvider<GrammarDataService> => ({
  provide: GRAMMAR_DATA_SERVICE,
  useExisting: classType,
});
