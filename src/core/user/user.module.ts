import { DynamicModule, Module, Type } from '@nestjs/common';

@Module({})
export class UserModule {
  static forModule(classModule: DynamicModule | Type): DynamicModule {
    return {
      module: UserModule,
      imports: [classModule],
      exports: [classModule],
    };
  }
}
