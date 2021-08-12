import {
  Column,
  Entity,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { VocabBookEntity } from './vocab-book.entity';
import { VocabWordEntity } from './vocab-word.entity';

@Entity('LOOKUPS')
export class VocabLookupEntity extends BaseEntity {
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
  @ManyToOne(() => VocabBookEntity, (vocabBook) => vocabBook.lookups)
  book: VocabBookEntity;

  @JoinColumn({ name: 'word_key' })
  @ManyToOne(() => VocabWordEntity, (vocabWord) => vocabWord.lookups)
  word: VocabWordEntity[];
}
