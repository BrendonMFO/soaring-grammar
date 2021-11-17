import { VocabModule } from '@core/vocab/vocab.module';
import { PhraseService } from './services/phrase.service';
import { SpeechModule } from '@core/speech/speech.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { GrammarModule } from '@core/grammar/grammar.module';
import { PhraseController } from './controllers/phrase.controller';
import { TranslationModule } from '@core/translation/translation.module';
import { VocabMiddleware } from '@core/vocab/middlewares/vocab.middleware';

@Module({
  imports: [VocabModule, GrammarModule, SpeechModule, TranslationModule],
  controllers: [PhraseController],
  providers: [PhraseService],
})
export class PhraseModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(VocabMiddleware).forRoutes('v1/phrase/database');
  }
}
