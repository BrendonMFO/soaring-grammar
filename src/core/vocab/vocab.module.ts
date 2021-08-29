import { VocabService } from './services/vocab.service';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GrammarModule } from '@core/grammar/grammar.module';
import { VocabController } from './controllers/vocab.controller';
import { VocabMiddleware } from './middlewares/vocab.middleware';
import { vocabMulterProvider } from './providers/vocab-multer.provider';

@Module({
  imports: [GrammarModule],
  controllers: [VocabController],
  providers: [VocabService, vocabMulterProvider()],
})
export class VocabModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(VocabMiddleware).forRoutes('v1/vocab');
  }
}
