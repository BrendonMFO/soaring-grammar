import { Reflector } from '@nestjs/core';
import { Injectable, Type } from '@nestjs/common';
import { DataDumpType } from '../constants/data-dump-type.constants';
import { DATA_DUMP_TEXT_PROCESSOR } from '../constants/data-dump.constants';

@Injectable()
export class DataDumpTextProcessorMetadataAccessor {
  constructor(private readonly reflector: Reflector) {}

  isTextProcessor(target: Type): boolean {
    if (!target) return false;
    return !!this.reflector.get(DATA_DUMP_TEXT_PROCESSOR, target);
  }

  getTextProcessorType(target: Type): DataDumpType {
    return this.reflector.get(DATA_DUMP_TEXT_PROCESSOR, target);
  }
}
