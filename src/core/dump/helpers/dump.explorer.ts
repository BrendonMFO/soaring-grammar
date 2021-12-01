import { Inject, Injectable, Type } from '@nestjs/common';
import { DUMP_SERVICE_MAP } from '../constants/dump.constants';
import { DumpMetadataAccessor } from './dump-metadata.accessor';
import { DumpServiceMap } from '../providers/dump-service-map.provider';
import { AbstractModuleExplorer } from 'src/common/helpers/module.explorer';

@Injectable()
export class DumpExplorer extends AbstractModuleExplorer<DumpServiceMap> {
  @Inject(DUMP_SERVICE_MAP)
  protected readonly serviceMap: DumpServiceMap;

  @Inject()
  private readonly dumpMetadataAccessor: DumpMetadataAccessor;

  getType(type: Type): string {
    return this.dumpMetadataAccessor.getDumpType(type);
  }

  isTarget(type: Type): boolean {
    return this.dumpMetadataAccessor.isDumpService(type);
  }
}
