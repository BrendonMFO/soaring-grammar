import * as multer from 'multer';
import { ValueProvider } from '@nestjs/common';
import { MULTER } from '../constants/vocab-keys.constants';

export const vocabMulterProvider = (): ValueProvider => ({
  provide: MULTER,
  useValue: multer({ dest: '.' }),
});
