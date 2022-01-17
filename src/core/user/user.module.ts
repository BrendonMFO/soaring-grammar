import { DynamicModule, Module, Type } from '@nestjs/common';

@Module({})
export class UserModule {
  static forDataLayer(dataLayerModule: Type): DynamicModule {
    return {
      module: UserModule,
      imports: [dataLayerModule],
    };
  }
}
