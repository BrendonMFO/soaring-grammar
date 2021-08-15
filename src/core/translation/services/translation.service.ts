import { lastValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { TranslationDataDto } from '../interfaces/translation-data-dto.interface';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';
import { TRANSLATION_DATA_SERVICE } from '../constants/translation-keys.constants';
import { GRAMMAR_DATA_SERVICE } from '@core/grammar/constants/grammar-keys.constants';
import { TranslationDataService } from '../interfaces/translation-data-service.interface';
import { GrammarDataService } from '@core/grammar/interfaces/grammar-data-service.interface';

@Injectable()
export class TranslationService {
  @Inject(GRAMMAR_DATA_SERVICE)
  private readonly grammarDataService: GrammarDataService;

  @Inject(TRANSLATION_DATA_SERVICE)
  private readonly translationDataService: TranslationDataService;

  async translateGrammarPhrase(
    grammarPhraseId: string,
    translationDataDto: TranslationDataDto,
  ): Promise<GrammarPhrase> {
    const grammarPhrase = await this.grammarDataService.getGrammarPhraseById(
      grammarPhraseId,
    );

    const translation = await lastValueFrom(
      this.translationDataService.translate({
        tl: translationDataDto.tl,
        sl: translationDataDto.sl,
        text: grammarPhrase.phrase,
      }),
    );

    grammarPhrase.translatedPhrase = translation.translatedResults[0];

    return this.grammarDataService.save(grammarPhrase);
  }
}
