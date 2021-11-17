import { lastValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { TranslationDataDto } from '../interfaces/translation-data-dto.interface';
import { TRANSLATION_DATA_SERVICE } from '../constants/translation-keys.constants';
import { TranslationResultDto } from '../interfaces/translation-result-dto.interface';
import { TranslationDataService } from '../interfaces/translation-data-service.interface';

@Injectable()
export class TranslationService {
  @Inject(TRANSLATION_DATA_SERVICE)
  private readonly translationDataService: TranslationDataService;

  translateGrammarPhrase(
    phrase: string,
    translationDataDto: TranslationDataDto,
  ): Promise<TranslationResultDto> {
    return lastValueFrom(
      this.translationDataService.translate({
        tl: translationDataDto.tl,
        sl: translationDataDto.sl,
        text: phrase,
      }),
    );
  }
}
