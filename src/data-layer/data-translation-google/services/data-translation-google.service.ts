import { from, map, Observable } from 'rxjs';
import { v2 } from '@google-cloud/translate';
import { Inject, Injectable } from '@nestjs/common';
import { GOOGLE_TRANSLATE } from '../constants/data-translation-google.constants';
import { TranslationParams } from '@core/translation/interfaces/translation-params.interface';
import { TranslationResultDto } from '@core/translation/interfaces/translation-result-dto.interface';
import { TranslationDataService } from '@core/translation/interfaces/translation-data-service.interface';

@Injectable()
export class DataTranslationGoogleService implements TranslationDataService {
  @Inject(GOOGLE_TRANSLATE)
  private readonly googleTranslate: v2.Translate;

  translate(
    translationParams: TranslationParams,
  ): Observable<TranslationResultDto> {
    const promise = this.googleTranslate.translate(translationParams.text, {
      to: translationParams.tl,
    });
    return from(promise).pipe(
      map((result) => ({
        originalText: translationParams.text,
        translatedResults: result[1].data.translations.map(
          (translation: { translatedText: string }) =>
            translation.translatedText,
        ),
      })),
    );
  }
}
