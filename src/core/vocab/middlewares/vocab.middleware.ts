import { Multer } from 'multer';
import { NextFunction, Request, Response } from 'express';
import { MULTER } from '../constants/vocab-keys.constants';
import { VOCAB_FIELD_NAME } from '../constants/vocab.constants';
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class VocabMiddleware implements NestMiddleware {
  @Inject(MULTER)
  private readonly multer: Multer;

  use(req: Request, res: Response, next: NextFunction): void {
    this.multer.single(VOCAB_FIELD_NAME)(req, res, (error: unknown) => {
      if (error) throw error;
      next();
    });
  }
}
