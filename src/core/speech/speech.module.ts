import { SpeechService } from './services/speech.service';
import { DynamicModule, Module, Type } from '@nestjs/common';
import { speechWriteFileProvider } from './providers/speech-write-file.provider';

@Module({
  providers: [speechWriteFileProvider(), SpeechService],
  exports: [SpeechService],
})
export class SpeechModule {
  static forDataLayer(dataLayerModule: Type): DynamicModule {
    return {
      module: SpeechModule,
      imports: [dataLayerModule],
    };
  }
}
