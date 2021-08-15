import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { VocabWord } from '@core/vocab/interfaces/vocab-word.interface';
import { VocabKindleWordEntity } from '../entities/vocab-kindle-word.entity';
import { VocabDataService } from '@core/vocab/interfaces/vocab-data-service.interface';

@Injectable()
export class DataVocabKindleService implements VocabDataService {
  @Inject(VocabKindleWordEntity)
  private readonly vocabKindleWordRepository: Repository<VocabKindleWordEntity>;

  async extractGrammar(): Promise<VocabWord[]> {
    const kindleWords = await this.vocabKindleWordRepository.find({
      where: { category: 0 },
      relations: ['lookups'],
    });
    return kindleWords.map<VocabWord>((kindleWord) => ({
      id: kindleWord.id,
      stem: kindleWord.stem,
      word: kindleWord.word,
      phrases: kindleWord.lookups.map((lookup) => ({
        id: lookup.id,
        phrase: lookup.usage,
      })),
    }));
  }
}
