import { Module } from '@nestjs/common';
import { PhraseService } from './services/phrase.service';
import { SpeechModule } from '@core/speech/speech.module';
import { GrammarModule } from '@core/grammar/grammar.module';
import { PhraseController } from './controllers/phrase.controller';
import { TranslationModule } from '@core/translation/translation.module';

@Module({
  imports: [GrammarModule, SpeechModule, TranslationModule],
  controllers: [PhraseController],
  providers: [PhraseService],
})
export class PhraseModule {}
