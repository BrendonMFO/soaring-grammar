import { Inject, Injectable } from '@nestjs/common';
import { VOCAB_DATA_SERVICE } from '../constants/vocab-keys.constants';
import { VocabDataService } from '../interfaces/vocab-data-service.interface';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';
import { GRAMMAR_DATA_SERVICE } from '@core/grammar/constants/grammar-keys.constants';
import { GrammarDataService } from '@core/grammar/interfaces/grammar-data-service.interface';

@Injectable()
export class VocabService {
  constructor(
    @Inject(VOCAB_DATA_SERVICE)
    private readonly vocabDataService: VocabDataService,
    @Inject(GRAMMAR_DATA_SERVICE)
    private readonly grammarDataService: GrammarDataService,
  ) {}

  async uploadVocab(userId: number): Promise<GrammarWord[]> {
    const vocabWords = await this.vocabDataService.extractGrammar();
    return this.grammarDataService.syncGrammar(userId, vocabWords);
  }
}
