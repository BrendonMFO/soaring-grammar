import { Module } from '@nestjs/common';
import { GrammarService } from './service/grammar.service';

@Module({
  providers: [GrammarService],
  exports: [GrammarService],
})
export class GrammarModule {}
