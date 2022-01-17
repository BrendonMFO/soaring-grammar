import { Module } from '@nestjs/common';
import { DumpModule } from '@core/dump/dump.module';
import { GrammarModule } from '@core/grammar/grammar.module';
import { GrammarDumpService } from './services/grammar-dump.service';
import { DataDumpModule } from '@data-layer/data-dump/data-dump.module';
import { GrammarDumpController } from './controllers/grammar-dump.controller';
import { DataGrammarModule } from '@data-layer/data-grammar/data-grammar.module';

@Module({
  imports: [
    DumpModule.forDataLayer(DataDumpModule),
    GrammarModule.forDataLayer(DataGrammarModule),
  ],
  controllers: [GrammarDumpController],
  providers: [GrammarDumpService],
})
export class GrammarDumpModule {}
