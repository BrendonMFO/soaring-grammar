import { map, Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { TranslationDto } from '../dtos/translation.dto';
import { GoogleTranslateResponseDto } from '../dtos/google-translate-response.dto';

@Injectable()
export class TranslationService {
  constructor(private readonly httpService: HttpService) {}

  translate(
    translationDto: TranslationDto,
  ): Observable<GoogleTranslateResponseDto> {
    return this.httpService
      .get('translate', { params: translationDto })
      .pipe(map(({ data }) => plainToClass(GoogleTranslateResponseDto, data)));
  }
}
