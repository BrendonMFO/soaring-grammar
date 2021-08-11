import {
  Injectable,
  CallHandler,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { unlink } from 'fs/promises';
import { catchError, Observable, tap } from 'rxjs';
import { getConnection } from 'typeorm';

@Injectable()
export class GrammarDbInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>,
  ): Observable<unknown> {
    const request: Request = context.switchToHttp().getRequest();
    return next.handle().pipe(
      tap(() => this.grammarDbFinalize(request.file)),
      catchError((error) => {
        this.grammarDbFinalize(request.file);
        throw error;
      }),
    );
  }

  private async grammarDbFinalize(file?: Express.Multer.File): Promise<void> {
    if (!file) return;
    await Promise.all([
      unlink(file.path),
      getConnection(file.filename).close(),
    ]);
  }
}
