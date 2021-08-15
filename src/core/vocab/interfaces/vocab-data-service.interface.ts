import { VocabWord } from './vocab-word.interface';

export interface VocabDataService {
  extractGrammar(): Promise<VocabWord[]>;
}
