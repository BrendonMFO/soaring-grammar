import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrammarService } from './services/grammar.service';
import { GrammarWordEntity } from './entities/grammar-word.entity';
import { GrammarPhraseEntity } from './entities/grammar-phrase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GrammarPhraseEntity, GrammarWordEntity])],
  providers: [GrammarService],
  exports: [GrammarService],
})
export class GrammarModule {}
