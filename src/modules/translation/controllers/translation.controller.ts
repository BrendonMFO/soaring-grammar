import { Observable } from 'rxjs';
import { Body, Controller, Post } from '@nestjs/common';
import { TranslationDto } from '../dtos/translation.dto';
import { TranslationService } from '../services/translation.service';
import { GoogleTranslateResponse } from '../models/google-translate-response.model';

@Controller({ version: '1', path: 'translation' })
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post()
  translate(
    @Body() translationDto: TranslationDto,
  ): Observable<GoogleTranslateResponse> {
    return this.translationService.translate(translationDto);
  }
}
