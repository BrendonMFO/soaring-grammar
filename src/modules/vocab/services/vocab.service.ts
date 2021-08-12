import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { VocabWordEntity } from '../entities/vocab-word.entity';
import { GrammarService } from '@modules/grammar/services/grammar.service';
import { GrammarWordEntity } from '@modules/grammar/entities/grammar-word.entity';

@Injectable()
export class VocabService {
  @Inject(GrammarService)
  private readonly grammarService: GrammarService;

  @Inject(VocabWordEntity)
  private readonly vocabWordRepository: Repository<VocabWordEntity>;

  async uploadVocab(userId: number): Promise<GrammarWordEntity[]> {
    const vocabWords = await this.getWords();
    return this.grammarService.syncGrammar(
      userId,
      vocabWords.map((vocabWord) => ({
        id: vocabWord.id,
        word: vocabWord.word,
        stem: vocabWord.stem,
        phrases: vocabWord.lookups.map((lookup) => ({
          id: lookup.id,
          phrase: lookup.usage,
        })),
      })),
    );
  }

  private getWords(): Promise<VocabWordEntity[]> {
    return this.vocabWordRepository.find({
      where: { category: 0 },
      relations: ['lookups'],
    });
  }
}
