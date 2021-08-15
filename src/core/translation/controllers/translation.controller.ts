import { AuthGuard } from '@nestjs/passport';
import { TranslationDto } from '../dtos/translation.dto';
import { TranslationService } from '../services/translation.service';
import { Body, Post, Param, UseGuards, Controller } from '@nestjs/common';
import { AuthGuardType } from '@core/auth/constants/auth-guard-type.constants';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';

@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({ version: '1', path: 'translation' })
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post(':phraseId')
  translate(
    @Param('phraseId') phraseId: string,
    @Body() translationDto: TranslationDto,
  ): Promise<GrammarPhrase> {
    return this.translationService.translateGrammarPhrase(
      phraseId,
      translationDto,
    );
  }
}
