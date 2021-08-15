import { VocabKindleLookupEntity } from './vocab-kindle-lookup.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('BOOK_INFO')
export class VocabKindleBookEntity extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  asin: string;

  @Column()
  guid: string;

  @Column()
  lang: string;

  @Column()
  title: string;

  @Column()
  authors: string;

  @OneToMany(() => VocabKindleLookupEntity, (vocabLookup) => vocabLookup.book)
  lookups: VocabKindleLookupEntity[];
}
