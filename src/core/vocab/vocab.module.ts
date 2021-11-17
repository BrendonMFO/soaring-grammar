import { Module } from '@nestjs/common';
import { VocabService } from './services/vocab.service';
import { MULTER } from './constants/vocab-keys.constants';
import { vocabMulterProvider } from './providers/vocab-multer.provider';

@Module({
  providers: [VocabService, vocabMulterProvider()],
  exports: [VocabService, MULTER],
})
export class VocabModule {}
