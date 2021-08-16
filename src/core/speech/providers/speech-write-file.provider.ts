import { writeFile } from 'fs';
import { promisify } from 'util';
import { ValueProvider } from '@nestjs/common';
import { SPEECH_WRITE_FILE } from '../constants/speech.constants';

export const speechWriteFileProvider = (): ValueProvider => ({
  provide: SPEECH_WRITE_FILE,
  useValue: promisify(writeFile),
});
