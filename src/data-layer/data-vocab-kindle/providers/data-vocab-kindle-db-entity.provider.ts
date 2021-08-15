import { Connection, Repository } from 'typeorm';
import { VOCAB_KINDLE_DB } from '../constants/vocab-kindle-keys.constants';
import { FactoryProvider, Scope, Type } from '@nestjs/common';

export const dataVocabKindleDbEntityProvider = <T>(
  provide: Type<T>,
): FactoryProvider<Repository<T>> => ({
  provide: provide,
  inject: [VOCAB_KINDLE_DB],
  scope: Scope.REQUEST,
  useFactory: (connection: Connection): Repository<T> =>
    connection.getRepository(provide),
});
