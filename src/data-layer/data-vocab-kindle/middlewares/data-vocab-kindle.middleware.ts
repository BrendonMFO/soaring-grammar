import { Multer } from 'multer';
import { NextFunction, Request, Response } from 'express';
import { Injectable, NestMiddleware, Inject } from '@nestjs/common';
import { VOCAB_FIELD_NAME } from '@core/vocab/constants/vocab.constants';
import { VOCAB_KINDLE_MULTER } from '../constants/vocab-kindle-keys.constants';

@Injectable()
export class DataVocabKindleMiddleware implements NestMiddleware {
  @Inject(VOCAB_KINDLE_MULTER)
  private readonly multer: Multer;

  use(req: Request, res: Response, next: NextFunction): void {
    this.multer.single(VOCAB_FIELD_NAME)(req, res, (error: unknown) => {
      if (error) throw error;
      next();
    });
  }
}
