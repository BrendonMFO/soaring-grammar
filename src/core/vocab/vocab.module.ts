import { VocabService } from './services/vocab.service';
import { DynamicModule, Module, Type } from '@nestjs/common';

@Module({
  providers: [VocabService],
  exports: [VocabService],
})
export class VocabModule {
  static forDataLayer(dataLayerModule: Type): DynamicModule {
    return {
      module: VocabModule,
      imports: [dataLayerModule],
    };
  }
}
