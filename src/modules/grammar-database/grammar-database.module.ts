import { VocabModule } from '@core/vocab/vocab.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { GrammarModule } from '@core/grammar/grammar.module';
import { VocabMiddleware } from '@core/vocab/middlewares/vocab.middleware';
import { GrammarDatabaseService } from './services/grammar-database.service';
import { GrammarDatabaseController } from './controllers/grammar-database.controller';
import { GRAMMAR_DATABASE_ROUTE_PATH } from './constants/grammar-database-route.constants';

@Module({
  imports: [VocabModule, GrammarModule],
  controllers: [GrammarDatabaseController],
  providers: [GrammarDatabaseService],
})
export class GrammarDatabaseModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(VocabMiddleware)
      .forRoutes(`v1/${GRAMMAR_DATABASE_ROUTE_PATH}/upload`);
  }
}
