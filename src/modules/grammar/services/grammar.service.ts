import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { GrammarWordEntity } from '../entities/grammar-word.entity';

@Injectable()
export class GrammarService {
  @Inject(GrammarWordEntity)
  private readonly grammarWordRepository: Repository<GrammarWordEntity>;

  getGrammar(): Promise<GrammarWordEntity[]> {
    return this.grammarWordRepository.find({
      where: { category: 0 },
      relations: ['lookups'],
    });
  }
}
