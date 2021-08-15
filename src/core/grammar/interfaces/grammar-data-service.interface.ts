import { GrammarWord } from './grammar-word.interface';
import { GrammarPhrase } from './grammar-phrase.interface';

export interface GrammarDataService {
  syncGrammar(
    userId: number,
    grammarWords: GrammarWord[],
  ): Promise<GrammarWord[]>;

  getGrammarPhraseById(id: string): Promise<GrammarPhrase>;

  save(grammarPhrase: GrammarPhrase): Promise<GrammarPhrase>;
}
