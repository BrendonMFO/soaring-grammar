import { DynamicModule, Global, Module, Type } from '@nestjs/common';

@Global()
@Module({})
export class DataLayerModule {
  static forModules(modules: Type[]): DynamicModule {
    return {
      module: DataLayerModule,
      imports: modules,
      exports: modules,
    };
  }
}
