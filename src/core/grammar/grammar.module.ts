import { GrammarService } from './services/grammar.service';
import { DynamicModule, Module, Type } from '@nestjs/common';

@Module({})
export class GrammarModule {
  static forDataLayer(dataLayerModule: Type): DynamicModule {
    return {
      module: GrammarModule,
      imports: [dataLayerModule],
      providers: [GrammarService],
      exports: [GrammarService],
    };
  }
}
