import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { GrammarWordEntity } from '../entities/grammar-word.entity';
import { GrammarBookEntity } from '../entities/grammar-book.entity';
import { GrammarLookupEntity } from '../entities/grammar-lookup.entity';

@Injectable()
export class GrammarService {
  @Inject(GrammarBookEntity)
  private readonly grammarBookRepository: Repository<GrammarBookEntity>;

  @Inject(GrammarWordEntity)
  private readonly grammarWordRepository: Repository<GrammarWordEntity>;

  @Inject(GrammarLookupEntity)
  private readonly grammarLookupRepository: Repository<GrammarLookupEntity>;

  getBooks(): Promise<GrammarBookEntity[]> {
    return this.grammarBookRepository.find({
      relations: ['lookups', 'lookups.word'],
      where: { 'lookups.word.category': 0 },
    });
  }

  getWords(): Promise<GrammarWordEntity[]> {
    return this.grammarWordRepository.find({
      where: { category: 0 },
      relations: ['lookups'],
    });
  }

  getLookups(): Promise<GrammarLookupEntity[]> {
    return this.grammarLookupRepository.find({
      relations: ['word'],
      where: { word: { category: 0 } },
    });
  }
}
