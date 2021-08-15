import { GrammarPhrase } from './grammar-phrase.interface';

export interface GrammarWord {
  readonly id: string;
  readonly word: string;
  readonly stem: string;
  readonly phrases: GrammarPhrase[];
}
