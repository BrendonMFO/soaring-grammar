import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { TranslationDto } from '../dtos/translation.dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuardType } from '@modules/auth/shared/auth.constants';
import { TranslationService } from '../services/translation.service';
import { GoogleTranslateResponseDto } from '../dtos/google-translate-response.dto';

@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({ version: '1', path: 'translation' })
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post()
  translate(
    @Body() translationDto: TranslationDto,
  ): Observable<GoogleTranslateResponseDto> {
    return this.translationService.translate(translationDto);
  }
}
