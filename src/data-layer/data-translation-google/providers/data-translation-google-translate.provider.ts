import { v2 } from '@google-cloud/translate';
import { FactoryProvider } from '@nestjs/common';
import { GOOGLE_TRANSLATE } from '../constants/data-translation-google.constants';

export const googleTranslateProvider = (): FactoryProvider => ({
  provide: GOOGLE_TRANSLATE,
  useFactory: (): v2.Translate => new v2.Translate({}),
});
