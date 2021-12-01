import { ValueProvider } from '@nestjs/common';
import { DumpType } from '../constants/dump-type.constants';
import { DUMP_SERVICE_MAP } from '../constants/dump.constants';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { DumpDataService } from '../interfaces/dump-data-service.interface';

export type DumpServiceMap = Map<DumpType, InstanceWrapper<DumpDataService>>;

export const dumpServiceMapProvider: ValueProvider<DumpServiceMap> = {
  provide: DUMP_SERVICE_MAP,
  useValue: new Map(),
};
