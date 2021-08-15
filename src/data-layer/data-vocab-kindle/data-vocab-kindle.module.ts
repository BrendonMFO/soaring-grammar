import { Module } from '@nestjs/common';
import { VocabKindleBookEntity } from './entities/vocab-kindle-book.entity';
import { VocabKindleWordEntity } from './entities/vocab-kindle-word.entity';
import { DataVocabKindleService } from './services/data-vocab-kindle.service';
import { VocabKindleLookupEntity } from './entities/vocab-kindle-lookup.entity';
import { VOCAB_DATA_SERVICE } from '@core/vocab/constants/vocab-keys.constants';
import { dataVocabKindleDbProvider } from './providers/data-vocab-kindle-db.provider';
import { vocabDataServiceProvider } from '@core/vocab/providers/vocab-data-service.provider';
import { dataVocabKindleDbEntityProvider } from './providers/data-vocab-kindle-db-entity.provider';

@Module({
  providers: [
    DataVocabKindleService,
    dataVocabKindleDbProvider(),
    vocabDataServiceProvider(DataVocabKindleService),
    dataVocabKindleDbEntityProvider(VocabKindleWordEntity),
    dataVocabKindleDbEntityProvider(VocabKindleBookEntity),
    dataVocabKindleDbEntityProvider(VocabKindleLookupEntity),
  ],
  exports: [VOCAB_DATA_SERVICE],
})
export class DataVocabKindleModule {}
