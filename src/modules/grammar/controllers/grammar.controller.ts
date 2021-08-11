import { AuthGuard } from '@nestjs/passport';
import { GrammarService } from '../services/grammar.service';
import { GrammarBookEntity } from '../entities/grammar-book.entity';
import { GrammarWordEntity } from '../entities/grammar-word.entity';
import { AuthGuardType } from '@modules/auth/shared/auth.constants';
import { GrammarLookupEntity } from '../entities/grammar-lookup.entity';
import { Post, Controller, UseInterceptors, UseGuards } from '@nestjs/common';
import { GrammarDbInterceptor } from '../interceptors/grammar-db.interceptor';

@UseInterceptors(GrammarDbInterceptor)
@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({ version: '1', path: 'grammar' })
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}

  @Post('books')
  kindleVocabBooks(): Promise<GrammarBookEntity[]> {
    return this.grammarService.getBooks();
  }

  @Post('words')
  kindleVocabWords(): Promise<GrammarWordEntity[]> {
    return this.grammarService.getWords();
  }

  @Post('lookups')
  kindleVocabLookups(): Promise<GrammarLookupEntity[]> {
    return this.grammarService.getLookups();
  }
}
