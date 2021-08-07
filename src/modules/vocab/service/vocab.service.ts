import { Injectable, Scope } from '@nestjs/common';
import { createConnection } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class VocabService {
  async test() {
    createConnection({
      type: 'sqlite',
      database: `data/line.sqlite`,
      logging: true,
    });
  }
}
