import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { TranslationDto } from '../dtos/translation.dto';
import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { TRANSLATION_SERVICE } from '../constants/translation-keys.constants';
import { AuthGuardType } from '@core/auth/constants/auth-guard-type.constants';
import { TranslationDataService } from '../interfaces/translation-data-service.interface';
import { TranslationResultDto } from '../interfaces/translation-result-dto.interface';

@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({ version: '1', path: 'translation' })
export class TranslationController {
  @Inject(TRANSLATION_SERVICE)
  private readonly translationService: TranslationDataService;

  @Post()
  translate(
    @Body() translationDto: TranslationDto,
  ): Observable<TranslationResultDto> {
    return this.translationService.translate(translationDto);
  }
}
