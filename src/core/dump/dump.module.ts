import {
  DUMP_DATA_SERVICE,
  DUMP_REQUEST_QUERY_PROP,
} from './constants/dump.constants';
import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { DumpService } from './services/dump.service';
import { DumpExplorer } from './helpers/dump.explorer';
import { DumpServiceInjector } from './helpers/dump-service.injector';
import { DumpMetadataAccessor } from './helpers/dump-metadata.accessor';
import { dumpServiceMapProvider } from './providers/dump-service-map.provider';
import { requestedServiceProvider } from 'src/common/providers/requested-service.provider';

@Module({
  imports: [DiscoveryModule],
  providers: [
    DumpService,
    DumpExplorer,
    DumpServiceInjector,
    DumpMetadataAccessor,
    dumpServiceMapProvider,
    requestedServiceProvider(
      DUMP_DATA_SERVICE,
      DumpServiceInjector,
      DUMP_REQUEST_QUERY_PROP,
    ),
  ],
  exports: [DumpService],
})
export class DumpModule {}
