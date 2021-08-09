import { map, Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { TranslationDto } from '../dtos/translation.dto';
import { GoogleTranslateResponse } from '../models/google-translate-response.model';

@Injectable()
export class TranslationService {
  constructor(private readonly httpService: HttpService) {}

  translate(
    translationDto: TranslationDto,
  ): Observable<GoogleTranslateResponse> {
    return this.httpService
      .get('translate', { params: translationDto })
      .pipe(map(({ data }) => plainToClass(GoogleTranslateResponse, data)));
  }
}
