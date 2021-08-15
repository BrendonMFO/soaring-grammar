/* eslint-disable @typescript-eslint/no-explicit-any */

import { ModuleMetadata, Type } from '@nestjs/common';
import { AuthModuleOptions } from './auth-module-options.interface';

export interface AuthModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  userDataModule: Type;
  useFactory?: (
    ...args: any[]
  ) => Promise<AuthModuleOptions> | AuthModuleOptions;
}
