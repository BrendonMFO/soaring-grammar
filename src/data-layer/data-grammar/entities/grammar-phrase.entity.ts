import { GrammarWordEntity } from './grammar-word.entity';
import { Column, Entity, ManyToOne, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity('tab_grammar_phrases')
export class GrammarPhraseEntity extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'text' })
  phrase: string;

  @Column({ type: 'text', nullable: true, default: null })
  translatedPhrase: string;

  @ManyToOne(() => GrammarWordEntity, (grammarWord) => grammarWord.phrases)
  grammarWord: GrammarWordEntity;
}
