import { Injectable } from '@nestjs/common';
import { VocabService } from '@core/vocab/services/vocab.service';
import { GrammarService } from '@core/grammar/services/grammar.service';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';

@Injectable()
export class GrammarDatabaseService {
  constructor(
    private readonly vocabService: VocabService,
    private readonly grammarService: GrammarService,
  ) {}

  async uploadGrammarDatabase(userId: number): Promise<GrammarWord[]> {
    const grammar = await this.vocabService.extractGrammar();
    return this.grammarService.syncGrammar(userId, grammar);
  }
}
