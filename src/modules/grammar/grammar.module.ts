import { GrammarService } from './services/grammar.service';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { grammarDbProvider } from './providers/grammar-db.provider';
import { GrammarController } from './controllers/grammar.controller';
import { GrammarMiddleware } from './middlewares/grammar.middleware';
import { grammarMulterProvider } from './providers/grammar-multer.provider';
import { grammarDbWordsProvider } from './providers/grammar-db-words.provider';
import { grammarDbBooksProvider } from './providers/grammar-db-books.provider';
import { grammarDbLookupsProvider } from './providers/grammar-db-lookups.provider';

@Module({
  controllers: [GrammarController],
  providers: [
    GrammarService,
    grammarDbProvider,
    grammarMulterProvider,
    grammarDbWordsProvider,
    grammarDbBooksProvider,
    grammarDbLookupsProvider,
  ],
})
export class GrammarModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(GrammarMiddleware)
      .forRoutes('v1/grammar/books', 'v1/grammar/lookups', 'v1/grammar/words');
  }
}
