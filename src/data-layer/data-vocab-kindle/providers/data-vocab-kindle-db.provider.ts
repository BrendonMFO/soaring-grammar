import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { Connection, createConnection } from 'typeorm';
import { FactoryProvider, Scope } from '@nestjs/common';
import { VOCAB_KINDLE_DB } from '../constants/vocab-kindle-keys.constants';
import { VocabKindleWordEntity } from '../entities/vocab-kindle-word.entity';
import { VocabKindleBookEntity } from '../entities/vocab-kindle-book.entity';
import { VocabKindleLookupEntity } from '../entities/vocab-kindle-lookup.entity';

export const dataVocabKindleDbProvider = (): FactoryProvider => ({
  inject: [REQUEST],
  scope: Scope.REQUEST,
  provide: VOCAB_KINDLE_DB,
  useFactory: (request: Request): Promise<Connection> => {
    const { file } = request;
    if (!file) return;
    return createConnection({
      logging: false,
      type: 'sqlite',
      name: file.filename,
      database: file.path,
      entities: [
        VocabKindleBookEntity,
        VocabKindleWordEntity,
        VocabKindleLookupEntity,
      ],
    });
  },
});
