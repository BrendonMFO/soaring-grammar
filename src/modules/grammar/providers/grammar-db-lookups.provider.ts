import { Connection } from 'typeorm';
import { GRAMMAR_DB } from './grammar-db.provider';
import { FactoryProvider, Scope } from '@nestjs/common';
import { GrammarLookupEntity } from '../entities/grammar-lookup.entity';

export const grammarDbLookupsProvider: FactoryProvider = {
  inject: [GRAMMAR_DB],
  scope: Scope.REQUEST,
  provide: GrammarLookupEntity,
  useFactory: (connection: Connection) => {
    return connection.getRepository(GrammarLookupEntity);
  },
};
