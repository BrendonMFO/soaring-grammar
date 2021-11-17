import { GrammarWord } from './grammar-word.interface';
import { GrammarPhrase } from './grammar-phrase.interface';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

export interface GrammarDataService {
  syncGrammar(
    userId: number,
    grammarWords: GrammarWord[],
  ): Promise<GrammarWord[]>;

  getGrammarPhraseById(id: string): Promise<GrammarPhrase>;

  save(grammarPhrase: GrammarPhrase): Promise<GrammarPhrase>;

  paginate(
    userId: number,
    options: IPaginationOptions,
  ): Promise<Pagination<GrammarWord>>;
}
