import { GrammarPhrase } from './grammar-phrase.interface';

export interface GrammarWord {
  id: string;
  word: string;
  stem: string;
  phrases: GrammarPhrase[];
}
