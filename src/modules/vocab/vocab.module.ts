import { Module } from '@nestjs/common';
import { VocabService } from './service/vocab.service';

@Module({
  providers: [VocabService],
  exports: [VocabService],
})
export class VocabModule {}
