import { Multer } from 'multer';
import { MULTER } from '../shared/vocab.constants';
import { NextFunction, Request, Response } from 'express';
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class VocabMiddleware implements NestMiddleware {
  @Inject(MULTER)
  private readonly multer: Multer;

  use(req: Request, res: Response, next: NextFunction): void {
    this.multer.single('vocab')(req, res, (error: unknown) => {
      if (error) throw error;
      next();
    });
  }
}
