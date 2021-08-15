/* eslint-disable @typescript-eslint/no-explicit-any */

import { ModuleMetadata } from '@nestjs/common';
import { TranslationGoogleRapidOptions } from './translation-google-rapid-options.interface';

export interface TranslationGoogleRapidAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useFactory?: (
    ...args: any[]
  ) => Promise<TranslationGoogleRapidOptions> | TranslationGoogleRapidOptions;
}
