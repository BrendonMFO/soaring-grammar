import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  BaseEntity,
  PrimaryColumn,
} from 'typeorm';
import { GrammarPhraseEntity } from './grammar-phrase.entity';
import { UserEntity } from '@data-layer/data-user/entities/user.entity';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';

@Entity('tab_grammar_words')
export class GrammarWordEntity extends BaseEntity implements GrammarWord {
  @PrimaryColumn()
  id: string;

  @Column()
  word: string;

  @Column()
  stem: string;

  @Column({ nullable: false })
  userId: number;

  @OneToMany(
    () => GrammarPhraseEntity,
    (grammarPhrase) => grammarPhrase.grammarWord,
    { cascade: true },
  )
  phrases: GrammarPhraseEntity[];

  @ManyToOne(() => UserEntity, (user) => user.words)
  user: UserEntity;
}
