import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { createConnection } from 'typeorm';
import { FactoryProvider, Scope } from '@nestjs/common';
import { GRAMMAR_DB } from '../shared/vocab.constants';
import { VocabWordEntity } from '../entities/vocab-word.entity';
import { VocabBookEntity } from '../entities/vocab-book.entity';
import { VocabLookupEntity } from '../entities/vocab-lookup.entity';

export const vocabDbProvider: FactoryProvider = {
  inject: [REQUEST],
  provide: GRAMMAR_DB,
  scope: Scope.REQUEST,
  useFactory: (request: Request) => {
    const { file } = request;
    return createConnection({
      logging: false,
      type: 'sqlite',
      name: file.filename,
      database: file.path,
      entities: [VocabWordEntity, VocabLookupEntity, VocabBookEntity],
    });
  },
};
