import { Inject, Injectable } from '@nestjs/common';
import { VOCAB_DATA_SERVICE } from '../constants/vocab-keys.constants';
import { GrammarService } from '@core/grammar/services/grammar.service';
import { VocabDataService } from '../interfaces/vocab-data-service.interface';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';

@Injectable()
export class VocabService {
  @Inject()
  private readonly grammarService: GrammarService;

  @Inject(VOCAB_DATA_SERVICE)
  private readonly vocabDataService: VocabDataService;

  async uploadVocab(userId: number): Promise<GrammarWord[]> {
    const vocabWords = await this.vocabDataService.extractGrammar();
    return this.grammarService.syncGrammar(userId, vocabWords);
  }
}
