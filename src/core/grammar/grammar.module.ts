import { DynamicModule, Module, Type } from '@nestjs/common';

@Module({})
export class GrammarModule {
  static forModule(classModule: DynamicModule | Type): DynamicModule {
    return {
      module: GrammarModule,
      imports: [classModule],
      exports: [classModule],
    };
  }
}
