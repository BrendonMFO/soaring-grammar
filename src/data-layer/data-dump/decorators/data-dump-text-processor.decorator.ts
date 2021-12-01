import {
  Injectable,
  SetMetadata,
  ScopeOptions,
  applyDecorators,
} from '@nestjs/common';
import { DataDumpType } from '../constants/data-dump-type.constants';
import { DATA_DUMP_TEXT_PROCESSOR } from '../constants/data-dump.constants';

export function TextProcessor(
  type: DataDumpType,
  options?: ScopeOptions,
): ClassDecorator {
  return applyDecorators(
    Injectable(options),
    SetMetadata(DATA_DUMP_TEXT_PROCESSOR, type),
  );
}
