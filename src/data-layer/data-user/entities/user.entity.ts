import {
  Column,
  Entity,
  OneToMany,
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@core/user/interfaces/user.interface';
import { GrammarWordEntity } from '@data-layer/data-grammar/entities/grammar-word.entity';

@Entity('tab_users')
export class UserEntity extends BaseEntity implements User {
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
