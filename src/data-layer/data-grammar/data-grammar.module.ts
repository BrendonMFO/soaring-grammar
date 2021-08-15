import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrammarWordEntity } from './entities/grammar-word.entity';
import { DataGrammarService } from './services/data-grammar.service';
import { GrammarPhraseEntity } from './entities/grammar-phrase.entity';
import { GRAMMAR_DATA_SERVICE } from '@core/grammar/constants/grammar-keys.constants';
import { grammarDataServiceProvider } from '@core/grammar/providers/grammar-data-service.provider';

@Module({
  imports: [TypeOrmModule.forFeature([GrammarPhraseEntity, GrammarWordEntity])],
  providers: [
    DataGrammarService,
    grammarDataServiceProvider(DataGrammarService),
  ],
  exports: [GRAMMAR_DATA_SERVICE],
})
export class DataGrammarModule {}
