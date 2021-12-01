import { Inject, Injectable, Type } from '@nestjs/common';
import { AbstractModuleExplorer } from 'src/common/helpers/module.explorer';
import { DATA_DUMP_TEXT_PROCESSOR_MAP } from '../constants/data-dump.constants';
import { DataDumpTextProcessorMetadataAccessor } from './data-dump-metadata.accessor';
import { DataDumpTextProcessorMap } from '../providers/data-dump-text-processor-map.provider';

@Injectable()
export class DataDumpExplorer extends AbstractModuleExplorer<DataDumpTextProcessorMap> {
  @Inject(DATA_DUMP_TEXT_PROCESSOR_MAP)
  protected serviceMap: DataDumpTextProcessorMap;

  @Inject()
  private readonly dataDumpTextProcessorMetadataAccessor: DataDumpTextProcessorMetadataAccessor;

  getType(type: Type): string {
    return this.dataDumpTextProcessorMetadataAccessor.getTextProcessorType(
      type,
    );
  }

  isTarget(type: Type): boolean {
    return this.dataDumpTextProcessorMetadataAccessor.isTextProcessor(type);
  }
}
