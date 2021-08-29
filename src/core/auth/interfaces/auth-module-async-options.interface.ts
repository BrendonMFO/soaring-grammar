/* eslint-disable @typescript-eslint/no-explicit-any */

import { ModuleMetadata } from '@nestjs/common';
import { AuthModuleOptions } from './auth-module-options.interface';

export interface AuthModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useFactory?: (
    ...args: any[]
  ) => Promise<AuthModuleOptions> | AuthModuleOptions;
}
