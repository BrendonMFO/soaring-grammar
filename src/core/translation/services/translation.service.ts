import { lastValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { GrammarService } from '@core/grammar/services/grammar.service';
import { TranslationDataDto } from '../interfaces/translation-data-dto.interface';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';
import { TRANSLATION_DATA_SERVICE } from '../constants/translation-keys.constants';
import { TranslationDataService } from '../interfaces/translation-data-service.interface';

@Injectable()
export class TranslationService {
  @Inject()
  private readonly grammarService: GrammarService;

  @Inject(TRANSLATION_DATA_SERVICE)
  private readonly translationDataService: TranslationDataService;

  async translateGrammarPhrase(
    grammarPhraseId: string,
    translationDataDto: TranslationDataDto,
  ): Promise<GrammarPhrase> {
    const grammarPhrase = await this.grammarService.getGrammarPhraseById(
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

    return this.grammarService.save(grammarPhrase);
  }
}
