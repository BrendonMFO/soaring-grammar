import { Reflector } from '@nestjs/core';
import { Injectable, Type } from '@nestjs/common';
import { DUMP_SERVICE } from '../constants/dump.constants';
import { DumpType } from '../constants/dump-type.constants';

@Injectable()
export class DumpMetadataAccessor {
  constructor(private readonly reflector: Reflector) {}

  isDumpService(target: Type): boolean {
    if (!target) return false;
    return !!this.reflector.get(DUMP_SERVICE, target);
  }

  getDumpType(target: Type): DumpType {
    return this.reflector.get(DUMP_SERVICE, target);
  }
}
