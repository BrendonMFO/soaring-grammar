import { Connection, Repository } from 'typeorm';
import { FactoryProvider, Scope, Type } from '@nestjs/common';
import { VOCAB_KINDLE_DB } from '../constants/vocab-kindle-keys.constants';

export const dataVocabKindleDbEntityProvider = <T>(
  provide: Type<T>,
): FactoryProvider<Repository<T>> => ({
  provide: provide,
  scope: Scope.REQUEST,
  inject: [VOCAB_KINDLE_DB],
  useFactory: (connection: Connection): Repository<T> => {
    if (!connection) return;
    return connection.getRepository(provide);
  },
});
