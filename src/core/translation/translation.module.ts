import { GrammarModule } from '@core/grammar/grammar.module';
import { DynamicModule, Module, Type } from '@nestjs/common';
import { TranslationService } from './services/translation.service';
import { TranslationController } from './controllers/translation.controller';

@Module({
  controllers: [TranslationController],
  providers: [TranslationService],
})
export class TranslationModule {
  static forModule(
    classModule: DynamicModule | Type,
    grammarDataModule: DynamicModule | Type,
  ): DynamicModule {
    return {
      module: TranslationModule,
      imports: [classModule, GrammarModule.forModule(grammarDataModule)],
    };
  }
}
