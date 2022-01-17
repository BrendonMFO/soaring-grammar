import { DynamicModule, Module, Type } from '@nestjs/common';
import { TranslationService } from './services/translation.service';

@Module({
  providers: [TranslationService],
  exports: [TranslationService],
})
export class TranslationModule {
  static forDataLayer(dataLayerModule: Type): DynamicModule {
    return {
      module: TranslationModule,
      imports: [dataLayerModule],
    };
  }
}
