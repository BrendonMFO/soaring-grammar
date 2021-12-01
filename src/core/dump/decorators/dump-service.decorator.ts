import {
  Injectable,
  SetMetadata,
  ScopeOptions,
  applyDecorators,
} from '@nestjs/common';
import { DUMP_SERVICE } from '../constants/dump.constants';
import { DumpType } from '../constants/dump-type.constants';

export function DumpService(
  type: DumpType,
  options?: ScopeOptions,
): ClassDecorator {
  return applyDecorators(SetMetadata(DUMP_SERVICE, type), Injectable(options));
}
