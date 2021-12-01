import {
  DATA_DUMP_TEXT_PROCESSOR,
  DATA_DUMP_REQUEST_QUERY_PROP,
} from './constants/data-dump.constants';
import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { DataDumpExplorer } from './helpers/data-dump.explorer';
import { DataDumpTextService } from './services/data-dump-text.service';
import { DataDumpServiceInjector } from './helpers/data-dump-service.injector';
import { DataDumpTextAnkiProcessor } from './processors/data-dump-text-anki.processor';
import { requestedServiceProvider } from 'src/common/providers/requested-service.provider';
import { DataDumpTextProcessorMetadataAccessor } from './helpers/data-dump-metadata.accessor';
import { dataDumpTextProcessorMapProvider } from './providers/data-dump-text-processor-map.provider';

@Module({
  imports: [DiscoveryModule],
  providers: [
    DataDumpExplorer,
    DataDumpTextService,
    DataDumpServiceInjector,
    DataDumpTextAnkiProcessor,
    dataDumpTextProcessorMapProvider,
    DataDumpTextProcessorMetadataAccessor,
    requestedServiceProvider(
      DATA_DUMP_TEXT_PROCESSOR,
      DataDumpServiceInjector,
      DATA_DUMP_REQUEST_QUERY_PROP,
    ),
  ],
  exports: [DataDumpTextService],
})
export class DataDumpModule {}
