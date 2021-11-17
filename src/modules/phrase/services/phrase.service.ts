import {
  Pagination,
  IPaginationMeta,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Injectable } from '@nestjs/common';
import { PhraseTranslateDto } from '../dtos/phrase-translate.dto';
import { VocabService } from '@core/vocab/services/vocab.service';
import { SpeechService } from '@core/speech/services/speech.service';
import { GrammarService } from '@core/grammar/services/grammar.service';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';
import { TranslationService } from '@core/translation/services/translation.service';

@Injectable()
export class PhraseService {
  constructor(
    private readonly vocabService: VocabService,
    private readonly speechService: SpeechService,
    private readonly grammarService: GrammarService,
    private readonly translationService: TranslationService,
  ) {}

  paginate(
    userId: number,
    options: IPaginationOptions,
  ): Promise<Pagination<GrammarWord, IPaginationMeta>> {
    return this.grammarService.paginate(userId, options);
  }

  async database(userId: number): Promise<GrammarWord[]> {
    const grammar = await this.vocabService.extractGrammar();
    return this.grammarService.syncGrammar(userId, grammar);
  }

  async synthesise(phraseId: string): Promise<GrammarPhrase> {
    const grammarPhrase = await this.grammarService.getGrammarPhraseById(
      phraseId,
    );

    await this.speechService.synthesize(grammarPhrase.id, grammarPhrase.phrase);

    grammarPhrase.synthesized = true;

    return this.grammarService.save(grammarPhrase);
  }

  async translate(
    phraseId: string,
    phraseTransleDto: PhraseTranslateDto,
  ): Promise<GrammarPhrase> {
    const grammarPhrase = await this.grammarService.getGrammarPhraseById(
      phraseId,
    );

    const translation = await this.translationService.translateGrammarPhrase(
      grammarPhrase.phrase,
      phraseTransleDto,
    );

    grammarPhrase.translatedPhrase = translation.translatedResults[0];

    return this.grammarService.save(grammarPhrase);
  }
}
