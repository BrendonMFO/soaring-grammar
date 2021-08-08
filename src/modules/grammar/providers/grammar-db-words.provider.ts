import { Connection } from 'typeorm';
import { GRAMMAR_DB } from './grammar-db.provider';
import { FactoryProvider, Scope } from '@nestjs/common';
import { GrammarWordEntity } from '../entities/grammar-word.entity';

export const grammarDbWordsProvider: FactoryProvider = {
  inject: [GRAMMAR_DB],
  scope: Scope.REQUEST,
  provide: GrammarWordEntity,
  useFactory: (connection: Connection) => {
    return connection.getRepository(GrammarWordEntity);
  },
};
