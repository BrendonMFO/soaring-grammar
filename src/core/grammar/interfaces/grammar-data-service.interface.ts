import { GrammarWord } from './grammar-word.interface';
import { GrammarPhrase } from './grammar-phrase.interface';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

export interface GrammarDataService {
  getGrammarPhraseById(id: string): Promise<GrammarPhrase>;

  getCompletedGrammarByUser(userId: number): Promise<GrammarPhrase[]>;

  save(grammarPhrase: GrammarPhrase): Promise<GrammarPhrase>;

  syncGrammar(
    userId: number,
    grammarWords: GrammarWord[],
  ): Promise<GrammarWord[]>;

  paginate(
    userId: number,
    options: IPaginationOptions,
  ): Promise<Pagination<GrammarWord>>;
}
