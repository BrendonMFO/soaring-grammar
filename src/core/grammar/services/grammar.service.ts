import { Inject, Injectable } from '@nestjs/common';
import { GrammarWord } from '../interfaces/grammar-word.interface';
import { GrammarPhrase } from '../interfaces/grammar-phrase.interface';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { GRAMMAR_DATA_SERVICE } from '../constants/grammar-keys.constants';
import { GrammarDataService } from '../interfaces/grammar-data-service.interface';

@Injectable()
export class GrammarService {
  @Inject(GRAMMAR_DATA_SERVICE)
  private readonly grammarDataService: GrammarDataService;

  getGrammarPhraseById(phraseId: string): Promise<GrammarPhrase> {
    return this.grammarDataService.getGrammarPhraseById(phraseId);
  }

  getCompletedGrammarByUser(userId: number): Promise<GrammarPhrase[]> {
    return this.grammarDataService.getCompletedGrammarByUser(userId);
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

  paginate(
    userId: number,
    options: IPaginationOptions,
  ): Promise<Pagination<GrammarWord>> {
    return this.grammarDataService.paginate(userId, options);
  }
}
