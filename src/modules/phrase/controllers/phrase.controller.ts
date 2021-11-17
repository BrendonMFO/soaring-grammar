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
  UseInterceptors,
  DefaultValuePipe,
} from '@nestjs/common';
import {
  PhraseRoutes,
  PHRASE_ROUTE_PATH,
  PHRASE_ROUTE_VERSIONS,
} from '../constants/phrase-route.constants';
import { AuthGuard } from '@nestjs/passport';
import { Pagination } from 'nestjs-typeorm-paginate';
import { PhraseService } from '../services/phrase.service';
import { User } from '@core/user/interfaces/user.interface';
import { PhraseTranslateDto } from '../dtos/phrase-translate.dto';
import { AuthUser } from '@core/auth/decorators/auth-user.decorator';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';
import { AuthGuardType } from '@core/auth/constants/auth-guard-type.constants';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';
import { VocabDbInterceptor } from '@core/vocab/interceptors/vocab-db.interceptor';

@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({ version: PHRASE_ROUTE_VERSIONS, path: PHRASE_ROUTE_PATH })
export class PhraseController {
  @Inject()
  private readonly phraseService: PhraseService;

  @Get()
  getPhraseGrammar(
    @AuthUser() user: User,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<GrammarWord>> {
    return this.phraseService.paginate(user.id, {
      page,
      limit,
      route: `/v1/${PHRASE_ROUTE_PATH}`,
    });
  }

  @Post(PhraseRoutes.PHRASE_DATABASE)
  @UseInterceptors(VocabDbInterceptor)
  phraseDatabase(@AuthUser() user: User): Promise<GrammarWord[]> {
    return this.phraseService.database(user.id);
  }

  @Post(PhraseRoutes.PHRASE_TRANSLATE)
  phraseTranslate(
    @Param('phraseId') phraseId: string,
    @Body() phraseTransleDto: PhraseTranslateDto,
  ): Promise<GrammarPhrase> {
    return this.phraseService.translate(phraseId, phraseTransleDto);
  }

  @Post(PhraseRoutes.PHRASE_SYNTHESIZE)
  phraseSynthetise(
    @Param('phraseId') phraseId: string,
  ): Promise<GrammarPhrase> {
    return this.phraseService.synthesise(phraseId);
  }
}
