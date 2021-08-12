import { VocabLookupEntity } from './vocab-lookup.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('BOOK_INFO')
export class VocabBookEntity extends BaseEntity {
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

  @OneToMany(() => VocabLookupEntity, (vocabLookup) => vocabLookup.book)
  lookups: VocabLookupEntity[];
}
