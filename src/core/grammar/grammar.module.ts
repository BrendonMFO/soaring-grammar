import { Module } from '@nestjs/common';
import { GrammarService } from './services/grammar.service';

@Module({
  providers: [GrammarService],
  exports: [GrammarService],
})
export class GrammarModule {}
