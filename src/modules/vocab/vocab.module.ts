import { VocabService } from './services/vocab.service';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { VocabWordEntity } from './entities/vocab-word.entity';
import { VocabBookEntity } from './entities/vocab-book.entity';
import { vocabDbProvider } from './providers/vocab-db.provider';
import { GrammarModule } from '@modules/grammar/grammar.module';
import { VocabController } from './controllers/vocab.controller';
import { VocabMiddleware } from './middlewares/vocab.middleware';
import { VocabLookupEntity } from './entities/vocab-lookup.entity';
import { vocabMulterProvider } from './providers/vocab-multer.provider';
import { vocabDbEntityProvider } from './providers/vocab-db-entity.provider';

@Module({
  imports: [GrammarModule],
  controllers: [VocabController],
  providers: [
    VocabService,
    vocabDbProvider,
    vocabMulterProvider,
    vocabDbEntityProvider(VocabWordEntity),
    vocabDbEntityProvider(VocabBookEntity),
    vocabDbEntityProvider(VocabLookupEntity),
  ],
})
export class VocabModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(VocabMiddleware).forRoutes('v1/vocab');
  }
}
