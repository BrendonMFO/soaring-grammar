import { Module } from '@nestjs/common';
import { DumpModule } from '@core/dump/dump.module';
import { GrammarModule } from '@core/grammar/grammar.module';
import { GrammarDumpService } from './services/grammar-dump.service';
import { GrammarDumpController } from './controllers/grammar-dump.controller';

@Module({
  imports: [DumpModule, GrammarModule],
  controllers: [GrammarDumpController],
  providers: [GrammarDumpService],
})
export class GrammarDumpModule {}
