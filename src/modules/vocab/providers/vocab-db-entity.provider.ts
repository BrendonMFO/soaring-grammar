import { Connection, Repository } from 'typeorm';
import { GRAMMAR_DB } from '../shared/vocab.constants';
import { FactoryProvider, Scope, Type } from '@nestjs/common';

export const vocabDbEntityProvider = <T>(
  provide: Type<T>,
): FactoryProvider<Repository<T>> => ({
  provide: provide,
  inject: [GRAMMAR_DB],
  scope: Scope.REQUEST,
  useFactory: (connection: Connection): Repository<T> =>
    connection.getRepository(provide),
});
