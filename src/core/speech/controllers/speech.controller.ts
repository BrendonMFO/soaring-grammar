import { AuthGuard } from '@nestjs/passport';
import { SpeechService } from '../services/speech.service';
import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuardType } from '@core/auth/constants/auth-guard-type.constants';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';

@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({ version: '1', path: 'speech' })
export class SpeechController {
  constructor(private readonly speechService: SpeechService) {}

  @Post(':phraseId')
  synthesize(@Param('phraseId') phraseId: string): Promise<GrammarPhrase> {
    return this.speechService.synthesize(phraseId);
  }
}
