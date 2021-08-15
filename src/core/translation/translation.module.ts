import { DynamicModule, Module, Type } from '@nestjs/common';
import { TranslationController } from './controllers/translation.controller';

@Module({
  controllers: [TranslationController],
})
export class TranslationModule {
  static forModuleAsync(classModule: DynamicModule | Type): DynamicModule {
    return {
      module: TranslationModule,
      imports: [classModule],
    };
  }
}
