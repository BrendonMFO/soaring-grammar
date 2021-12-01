import { Inject, Injectable } from '@nestjs/common';
import { DUMP_SERVICE_MAP } from '../constants/dump.constants';
import { ServiceInjector } from 'src/common/helpers/service.injector';
import { DumpServiceMap } from '../providers/dump-service-map.provider';

@Injectable()
export class DumpServiceInjector extends ServiceInjector<DumpServiceMap> {
  @Inject(DUMP_SERVICE_MAP)
  protected readonly serviceMap: DumpServiceMap;
}
