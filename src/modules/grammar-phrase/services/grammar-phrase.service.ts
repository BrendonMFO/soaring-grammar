import { Injectable } from '@nestjs/common';
import { SpeechService } from '@core/speech/services/speech.service';
import { GrammarService } from '@core/grammar/services/grammar.service';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';
import { GrammarPhraseTranslateDto } from '../dtos/grammar-phrase-translate.dto';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';
import { TranslationService } from '@core/translation/services/translation.service';

@Injectable()
export class GrammarPhraseService {
  constructor(
    private readonly speechService: SpeechService,
    private readonly grammarService: GrammarService,
    private readonly translationService: TranslationService,
  ) {}

  paginate(
    userId: number,
    options: IPaginationOptions,
  ): Promise<Pagination<GrammarWord>> {
    return this.grammarService.paginate(userId, options);
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
    phraseTranslateDto: GrammarPhraseTranslateDto,
  ): Promise<GrammarPhrase> {
    const grammarPhrase = await this.grammarService.getGrammarPhraseById(
      phraseId,
    );

    const translation = await this.translationService.translateGrammarPhrase(
      grammarPhrase.phrase,
      phraseTranslateDto,
    );

    grammarPhrase.translatedPhrase = translation.translatedResults[0];

    return this.grammarService.save(grammarPhrase);
  }
}
