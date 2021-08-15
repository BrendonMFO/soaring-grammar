import {
  Column,
  Entity,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { VocabKindleBookEntity } from './vocab-kindle-book.entity';
import { VocabKindleWordEntity } from './vocab-kindle-word.entity';

@Entity('LOOKUPS')
export class VocabKindleLookupEntity extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  word_key: string;

  @Column()
  book_key: string;

  @Column()
  dict_key: string;

  @Column()
  pos: string;

  @Column()
  usage: string;

  @Column()
  timestamp: number;

  @JoinColumn({ name: 'book_key' })
  @ManyToOne(() => VocabKindleBookEntity, (vocabBook) => vocabBook.lookups)
  book: VocabKindleBookEntity;

  @JoinColumn({ name: 'word_key' })
  @ManyToOne(() => VocabKindleWordEntity, (vocabWord) => vocabWord.lookups)
  word: VocabKindleWordEntity[];
}
