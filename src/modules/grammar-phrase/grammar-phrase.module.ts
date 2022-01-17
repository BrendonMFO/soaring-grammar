import { Module } from '@nestjs/common';
import { SpeechModule } from '@core/speech/speech.module';
import { GrammarModule } from '@core/grammar/grammar.module';
import { TranslationModule } from '@core/translation/translation.module';
import { GrammarPhraseService } from './services/grammar-phrase.service';
import { DataGrammarModule } from '@data-layer/data-grammar/data-grammar.module';
import { GrammarPhraseController } from './controllers/grammar-phrase.controller';
import { DataSpeechGoogleModule } from '@data-layer/data-speech-google/data-speech-google.module';
import { DataTranslationGoogleModule } from '@data-layer/data-translation-google/data-translation-google.module';

@Module({
  imports: [
    GrammarModule.forDataLayer(DataGrammarModule),
    SpeechModule.forDataLayer(DataSpeechGoogleModule),
    TranslationModule.forDataLayer(DataTranslationGoogleModule),
  ],
  controllers: [GrammarPhraseController],
  providers: [GrammarPhraseService],
})
export class GrammarPhraseModule {}
