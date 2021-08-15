import { GrammarWord } from './grammar-word.interface';

export interface GrammarDataService {
  syncGrammar(
    userId: number,
    grammarWords: GrammarWord[],
  ): Promise<GrammarWord[]>;
}
