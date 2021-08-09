import {
  Column,
  Entity,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { GrammarBookEntity } from './grammar-book.entity';
import { GrammarWordEntity } from './grammar-word.entity';

@Entity('LOOKUPS')
export class GrammarLookupEntity extends BaseEntity {
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
  @ManyToOne(() => GrammarBookEntity, (grammarBook) => grammarBook.lookups)
  book: GrammarBookEntity;

  @JoinColumn({ name: 'word_key' })
  @ManyToOne(() => GrammarWordEntity, (grammarWord) => grammarWord.lookups)
  word: GrammarWordEntity[];
}
