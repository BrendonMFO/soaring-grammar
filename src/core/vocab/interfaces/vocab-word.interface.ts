import { VocabPhrase } from './vocab-lookup.interface';

export interface VocabWord {
  id: string;
  word: string;
  stem: string;
  phrases: VocabPhrase[];
}
