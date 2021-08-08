import * as multer from 'multer';
import { ValueProvider } from '@nestjs/common';

export const MULTER = Symbol('__multer_provider__');

export const grammarMulterProvider: ValueProvider = {
  provide: MULTER,
  useValue: multer({ dest: 'temp' }),
};
