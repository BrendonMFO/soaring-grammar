import { Connection } from 'typeorm';
import { GRAMMAR_DB } from './grammar-db.provider';
import { FactoryProvider, Scope } from '@nestjs/common';
import { GrammarBookEntity } from '../entities/grammar-book.entity';

export const grammarDbBooksProvider: FactoryProvider = {
  inject: [GRAMMAR_DB],
  scope: Scope.REQUEST,
  provide: GrammarBookEntity,
  useFactory: (connection: Connection) => {
    return connection.getRepository(GrammarBookEntity);
  },
};
