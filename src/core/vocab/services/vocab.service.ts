import { Inject, Injectable } from '@nestjs/common';
import { VocabWord } from '../interfaces/vocab-word.interface';
import { VOCAB_DATA_SERVICE } from '../constants/vocab-keys.constants';
import { VocabDataService } from '../interfaces/vocab-data-service.interface';

@Injectable()
export class VocabService {
  @Inject(VOCAB_DATA_SERVICE)
  private readonly vocabDataService: VocabDataService;

  extractGrammar(): Promise<VocabWord[]> {
    return this.vocabDataService.extractGrammar();
  }
}
