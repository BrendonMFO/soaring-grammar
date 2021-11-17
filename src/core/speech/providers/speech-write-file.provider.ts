import { promisify } from 'util';
import { ValueProvider } from '@nestjs/common';
import { PathOrFileDescriptor, writeFile, WriteFileOptions } from 'fs';
import { SPEECH_WRITE_FILE } from '../constants/speech-keys.constants';

export type WriteFile = (
  path: PathOrFileDescriptor,
  data: string | NodeJS.ArrayBufferView,
  options?: WriteFileOptions,
) => Promise<void>;

export const speechWriteFileProvider = (): ValueProvider<WriteFile> => ({
  provide: SPEECH_WRITE_FILE,
  useValue: promisify(writeFile),
});
