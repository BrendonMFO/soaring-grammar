import { GrammarLookupEntity } from './grammar-lookup.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('BOOK_INFO')
export class GrammarBookEntity extends BaseEntity {
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

  @OneToMany(() => GrammarLookupEntity, (grammarLookup) => grammarLookup.book)
  lookups: GrammarLookupEntity[];
}
