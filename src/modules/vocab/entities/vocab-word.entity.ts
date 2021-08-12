import { VocabLookupEntity } from './vocab-lookup.entity';
import { Column, Entity, BaseEntity, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('WORDS')
export class VocabWordEntity extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  word: string;

  @Column()
  stem: string;

  @Column()
  lang: string;

  @Column()
  category: number;

  @Column()
  timestamp: number;

  @Column()
  profileid: string;

  @OneToMany(() => VocabLookupEntity, (vocabLookup) => vocabLookup.word)
  lookups: VocabLookupEntity[];
}
