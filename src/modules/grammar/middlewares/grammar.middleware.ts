import { Multer } from 'multer';
import { NextFunction, Request, Response } from 'express';
import { MULTER } from '../providers/grammar-multer.provider';
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class GrammarMiddleware implements NestMiddleware {
  @Inject(MULTER)
  private readonly multer: Multer;

  use(req: Request, res: Response, next: NextFunction): void {
    this.multer.single('vocab')(req, res, (error: unknown) => {
      if (error) throw error;
      next();
    });
  }
}
