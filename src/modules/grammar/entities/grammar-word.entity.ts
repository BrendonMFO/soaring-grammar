import { GrammarLookupEntity } from './grammar-lookup.entity';
import { Column, Entity, BaseEntity, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('WORDS')
export class GrammarWordEntity extends BaseEntity {
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

  @OneToMany(() => GrammarLookupEntity, (grammarLookup) => grammarLookup.word)
  lookups: GrammarLookupEntity[];
}
