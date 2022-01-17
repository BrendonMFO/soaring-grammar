import {
  Post,
  Inject,
  Controller,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  GRAMMAR_DATABASE_ROUTE_PATH,
  GRAMMAR_DATABASE_ROUTE_VERSIONS,
} from '../constants/grammar-database-route.constants';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@core/user/interfaces/user.interface';
import { AuthUser } from '@core/auth/decorators/auth-user.decorator';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';
import { GrammarDatabaseService } from '../services/grammar-database.service';
import { AuthGuardType } from '@core/auth/constants/auth-guard-type.constants';
import { DataVocabKindleInterceptor } from '@data-layer/data-vocab-kindle/interceptors/data-vocab-kindle.interceptor';

@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({
  path: GRAMMAR_DATABASE_ROUTE_PATH,
  version: GRAMMAR_DATABASE_ROUTE_VERSIONS,
})
export class GrammarDatabaseController {
  @Inject()
  private readonly grammarDatabaseService: GrammarDatabaseService;

  @Post('upload')
  @UseInterceptors(DataVocabKindleInterceptor)
  phraseDatabase(@AuthUser() user: User): Promise<GrammarWord[]> {
    return this.grammarDatabaseService.uploadGrammarDatabase(user.id);
  }
}
