import { Inject, Injectable } from '@nestjs/common';
import { ServiceInjector } from 'src/common/helpers/service.injector';
import { DATA_DUMP_TEXT_PROCESSOR_MAP } from '../constants/data-dump.constants';
import { DataDumpTextProcessorMap } from '../providers/data-dump-text-processor-map.provider';

@Injectable()
export class DataDumpServiceInjector extends ServiceInjector<DataDumpTextProcessorMap> {
  @Inject(DATA_DUMP_TEXT_PROCESSOR_MAP)
  protected readonly serviceMap: DataDumpTextProcessorMap;
}
