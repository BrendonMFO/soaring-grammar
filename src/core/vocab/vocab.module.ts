import {
  Type,
  Module,
  DynamicModule,
  MiddlewareConsumer,
} from '@nestjs/common';
import { VocabService } from './services/vocab.service';
import { GrammarModule } from '@core/grammar/grammar.module';
import { VocabController } from './controllers/vocab.controller';
import { VocabMiddleware } from './middlewares/vocab.middleware';
import { vocabMulterProvider } from './providers/vocab-multer.provider';

@Module({
  controllers: [VocabController],
  providers: [VocabService, vocabMulterProvider()],
})
export class VocabModule {
  static forModule(
    vocabDataModule: DynamicModule | Type,
    grammarDataModule: DynamicModule | Type,
  ): DynamicModule {
    return {
      module: VocabModule,
      imports: [GrammarModule.forModule(grammarDataModule), vocabDataModule],
    };
  }

  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(VocabMiddleware).forRoutes('v1/vocab');
  }
}
