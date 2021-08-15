import { map, Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { GoogleTranslateResultDto } from '../dtos/google-translate-result.dto';
import { GoogleTranslateResponseDto } from '../dtos/google-translate-response.dto';
import { TranslationParams } from '@core/translation/interfaces/translation-params.interface';
import { TranslationDataService } from '@core/translation/interfaces/translation-data-service.interface';

@Injectable()
export class TranslationGoogleRapidService implements TranslationDataService {
  constructor(private readonly httpService: HttpService) {}

  translate(
    translationParams: TranslationParams,
  ): Observable<GoogleTranslateResultDto> {
    return this.httpService
      .get('translate', {
        params: {
          sl: translationParams.sl,
          tl: translationParams.tl,
          text: translationParams.text,
        },
      })
      .pipe(
        map(({ data }) => plainToClass(GoogleTranslateResponseDto, data)),
        map((googleResponse) =>
          plainToClass(GoogleTranslateResultDto, {
            originalText: translationParams.text,
            translatedText: googleResponse.data.pairs.map((pair) => pair.t),
          }),
        ),
      );
  }
}
