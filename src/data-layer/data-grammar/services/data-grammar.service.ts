import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GrammarWordDto } from '../dtos/grammar-word.dto';
import { Bind } from 'src/common/decorators/bind.decorator';
import { GrammarWordEntity } from '../entities/grammar-word.entity';
import { Sanitize } from 'src/common/decorators/sanitize.decorator';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';
import { GrammarDataService } from '@core/grammar/interfaces/grammar-data-service.interface';

@Injectable()
export class DataGrammarService implements GrammarDataService {
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
