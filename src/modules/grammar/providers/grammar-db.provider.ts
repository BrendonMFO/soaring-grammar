import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { createConnection } from 'typeorm';
import { FactoryProvider, Scope } from '@nestjs/common';
import { GrammarWordEntity } from '../entities/grammar-word.entity';
import { GrammarLookupEntity } from '../entities/grammar-lookup.entity';

export const GRAMMAR_DB = Symbol('__grammar_db_provider__');

export const grammarDbProvider: FactoryProvider = {
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
      entities: [GrammarWordEntity, GrammarLookupEntity],
    });
  },
};
