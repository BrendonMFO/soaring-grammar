import { GrammarWordEntity } from './grammar-word.entity';
import { Column, Entity, ManyToOne, BaseEntity, PrimaryColumn } from 'typeorm';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';

@Entity('tab_grammar_phrases')
export class GrammarPhraseEntity extends BaseEntity implements GrammarPhrase {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'text' })
  phrase: string;

  @Column({ type: 'text', nullable: true, default: null })
  translatedPhrase?: string;

  @Column({ nullable: false, default: false })
  synthesized?: boolean;

  @ManyToOne(() => GrammarWordEntity, (grammarWord) => grammarWord.phrases)
  grammarWord: GrammarWordEntity;
}
