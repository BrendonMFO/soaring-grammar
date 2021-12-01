import { ValueProvider } from '@nestjs/common';
import { DataDumpType } from '../constants/data-dump-type.constants';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { DATA_DUMP_TEXT_PROCESSOR_MAP } from '../constants/data-dump.constants';
import { DataDumpTextProcessor } from '../interfaces/data-dump-text-processor.interface';

export type DataDumpTextProcessorMap = Map<
  DataDumpType,
  InstanceWrapper<DataDumpTextProcessor>
>;

export const dataDumpTextProcessorMapProvider: ValueProvider<DataDumpTextProcessorMap> =
  {
    provide: DATA_DUMP_TEXT_PROCESSOR_MAP,
    useValue: new Map(),
  };
