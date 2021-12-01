import { GrammarWord } from './grammar-word.interface';

export interface GrammarPhrase {
  id: string;
  phrase: string;
  synthesized?: boolean;
  translatedPhrase?: string;
  grammarWord?: GrammarWord;
}
