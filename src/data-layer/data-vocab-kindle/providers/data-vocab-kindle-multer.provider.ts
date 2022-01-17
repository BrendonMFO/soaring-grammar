import * as multer from 'multer';
import { ValueProvider } from '@nestjs/common';
import { VOCAB_KINDLE_MULTER } from '../constants/vocab-kindle-keys.constants';

export const vocabMulterProvider = (): ValueProvider<multer.Multer> => ({
  provide: VOCAB_KINDLE_MULTER,
  useValue: multer({ dest: '.' }),
});
