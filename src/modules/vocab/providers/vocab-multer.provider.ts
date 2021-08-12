import * as multer from 'multer';
import { ValueProvider } from '@nestjs/common';
import { MULTER } from '../shared/vocab.constants';

export const vocabMulterProvider: ValueProvider = {
  provide: MULTER,
  useValue: multer({ dest: '.' }),
};
