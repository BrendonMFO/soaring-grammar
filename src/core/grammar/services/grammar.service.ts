import { Inject, Injectable } from '@nestjs/common';
import { GrammarWord } from '../interfaces/grammar-word.interface';
import { GRAMMAR_DATA_SERVICE } from '../constants/grammar-keys.constants';
import { GrammarDataService } from '../interfaces/grammar-data-service.interface';
import { GrammarPhrase } from '../interfaces/grammar-phrase.interface';

@Injectable()
export class GrammarService {
  @Inject(GRAMMAR_DATA_SERVICE)
  private readonly grammarDataService: GrammarDataService;

  getGrammarPhraseById(id: string): Promise<GrammarPhrase> {
    return this.grammarDataService.getGrammarPhraseById(id);
  }

  save(grammarPhrase: GrammarPhrase): Promise<GrammarPhrase> {
    return this.grammarDataService.save(grammarPhrase);
  }

  syncGrammar(
    userId: number,
    grammarWords: GrammarWord[],
  ): Promise<GrammarWord[]> {
    return this.grammarDataService.syncGrammar(userId, grammarWords);
  }
}
