import { GrammarService } from '../services/grammar.service';
import { Post, Controller, UseInterceptors } from '@nestjs/common';
import { GrammarBookEntity } from '../entities/grammar-book.entity';
import { GrammarWordEntity } from '../entities/grammar-word.entity';
import { GrammarLookupEntity } from '../entities/grammar-lookup.entity';
import { GrammarDbInterceptor } from '../interceptors/grammar-db.interceptor';

@UseInterceptors(GrammarDbInterceptor)
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
