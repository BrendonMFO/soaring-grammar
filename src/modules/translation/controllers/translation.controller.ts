import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { TranslationDto } from '../dtos/translation.dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuardType } from '@modules/auth/shared/auth.constants';
import { TranslationService } from '../services/translation.service';
import { GoogleTranslateResponse } from '../models/google-translate-response.model';

@UseGuards(AuthGuard(AuthGuardType.JWT))
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
