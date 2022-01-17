import {
  Get,
  Post,
  Body,
  Param,
  Query,
  Inject,
  UseGuards,
  Controller,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import {
  GrammarPhraseRoutes,
  GRAMMAR_PHRASE_ROUTE_PATH,
  GRAMMAR_PHRASE_ROUTE_VERSIONS,
} from '../constants/grammar-phrase-route.constants';
import { AuthGuard } from '@nestjs/passport';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from '@core/user/interfaces/user.interface';
import { AuthUser } from '@core/auth/decorators/auth-user.decorator';
import { GrammarPhraseService } from '../services/grammar-phrase.service';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';
import { AuthGuardType } from '@core/auth/constants/auth-guard-type.constants';
import { GrammarPhraseTranslateDto } from '../dtos/grammar-phrase-translate.dto';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';

@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({
  path: GRAMMAR_PHRASE_ROUTE_PATH,
  version: GRAMMAR_PHRASE_ROUTE_VERSIONS,
})
export class GrammarPhraseController {
  @Inject()
  private readonly grammarPhraseService: GrammarPhraseService;

  @Get()
  getPhraseGrammar(
    @AuthUser() user: User,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<GrammarWord>> {
    return this.grammarPhraseService.paginate(user.id, {
      page,
      limit,
      route: `/v1/${GRAMMAR_PHRASE_ROUTE_PATH}`,
    });
  }

  @Post(GrammarPhraseRoutes.PHRASE_TRANSLATE)
  phraseTranslate(
    @Param('phraseId') phraseId: string,
    @Body() phraseTranslateDto: GrammarPhraseTranslateDto,
  ): Promise<GrammarPhrase> {
    return this.grammarPhraseService.translate(phraseId, phraseTranslateDto);
  }

  @Post(GrammarPhraseRoutes.PHRASE_SYNTHESIZE)
  phraseSynthesise(
    @Param('phraseId') phraseId: string,
  ): Promise<GrammarPhrase> {
    return this.grammarPhraseService.synthesise(phraseId);
  }
}
