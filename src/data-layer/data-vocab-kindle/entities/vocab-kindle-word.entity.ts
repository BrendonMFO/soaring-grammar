import { VocabKindleLookupEntity } from './vocab-kindle-lookup.entity';
import { Column, Entity, BaseEntity, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('WORDS')
export class VocabKindleWordEntity extends BaseEntity {
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

  @OneToMany(() => VocabKindleLookupEntity, (vocabLookup) => vocabLookup.word)
  lookups: VocabKindleLookupEntity[];
}
