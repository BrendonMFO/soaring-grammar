import { VocabModule } from '@core/vocab/vocab.module';
import { GrammarModule } from '@core/grammar/grammar.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GrammarDatabaseService } from './services/grammar-database.service';
import { DataGrammarModule } from '@data-layer/data-grammar/data-grammar.module';
import { GrammarDatabaseController } from './controllers/grammar-database.controller';
import { GRAMMAR_DATABASE_ROUTE_PATH } from './constants/grammar-database-route.constants';
import { DataVocabKindleModule } from '@data-layer/data-vocab-kindle/data-vocab-kindle.module';
import { DataVocabKindleMiddleware } from '@data-layer/data-vocab-kindle/middlewares/data-vocab-kindle.middleware';

@Module({
  imports: [
    DataVocabKindleModule.registerMiddleware(),
    GrammarModule.forDataLayer(DataGrammarModule),
    VocabModule.forDataLayer(DataVocabKindleModule),
  ],
  controllers: [GrammarDatabaseController],
  providers: [GrammarDatabaseService],
})
export class GrammarDatabaseModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(DataVocabKindleMiddleware)
      .forRoutes(`v1/${GRAMMAR_DATABASE_ROUTE_PATH}/upload`);
  }
}
