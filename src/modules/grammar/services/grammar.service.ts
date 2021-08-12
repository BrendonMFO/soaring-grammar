import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bind } from '@common/decorators/bind.decorator';
import { GrammarWordDto } from '../dtos/grammar-word.dto';
import { Sanitize } from '@common/decorators/sanitize.decorator';
import { GrammarWord } from '../interfaces/grammar-word.interface';
import { GrammarWordEntity } from '../entities/grammar-word.entity';

@Injectable()
export class GrammarService {
  @InjectRepository(GrammarWordEntity)
  private readonly grammarWordRepository: Repository<GrammarWordEntity>;

  @Sanitize()
  syncGrammar(
    userId: number,
    @Bind(GrammarWordDto) grammarWords: GrammarWord[],
  ): Promise<GrammarWordEntity[]> {
    return Promise.all(
      grammarWords.map((grammarWord) =>
        this.grammarWordRepository.save({
          userId,
          ...grammarWord,
        }),
      ),
    );
  }
}
