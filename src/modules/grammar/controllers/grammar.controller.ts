import { GrammarService } from '../services/grammar.service';
import { Post, Controller, UseInterceptors } from '@nestjs/common';
import { GrammarWordEntity } from '../entities/grammar-word.entity';
import { GrammarDbInterceptor } from '../interceptors/grammar-db.interceptor';

@Controller('grammar')
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}

  @Post('vocab')
  @UseInterceptors(GrammarDbInterceptor)
  kindleVocab(): Promise<GrammarWordEntity[]> {
    return this.grammarService.getGrammar();
  }
}
