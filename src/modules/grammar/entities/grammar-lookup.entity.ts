import {
  Column,
  Entity,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
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

  @JoinColumn({ name: 'word_key' })
  @ManyToOne(() => GrammarWordEntity, (grammarWord) => grammarWord.lookups)
  word: GrammarWordEntity;
}
