import { map, Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { GoogleTranslateResultDto } from '../dtos/google-translate-result.dto';
import { GoogleTranslateResponseDto } from '../dtos/google-translate-response.dto';
import { TranslationDataDto } from '@core/translation/interfaces/translation-data-dto.interface';
import { TranslationDataService } from '@core/translation/interfaces/translation-data-service.interface';

@Injectable()
export class TranslationGoogleRapidService implements TranslationDataService {
  constructor(private readonly httpService: HttpService) {}

  translate(
    translationDto: TranslationDataDto,
  ): Observable<GoogleTranslateResultDto> {
    return this.httpService.get('translate', { params: translationDto }).pipe(
      map(({ data }) => plainToClass(GoogleTranslateResponseDto, data)),
      map((googleResponse) =>
        plainToClass(GoogleTranslateResultDto, {
          originalText: googleResponse.data.source.text,
          translatedText: googleResponse.data.pairs.map((pair) => pair.t),
        }),
      ),
    );
  }
}
