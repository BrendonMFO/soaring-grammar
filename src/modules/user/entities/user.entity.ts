import {
  Column,
  Entity,
  OneToMany,
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GrammarWordEntity } from '@modules/grammar/entities/grammar-word.entity';

@Entity('tab_users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  googleId: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => GrammarWordEntity, (grammarWord) => grammarWord.user)
  words: GrammarWordEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
