import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';

export interface User {
  id: number;
  googleId: string;
  email: string;
  firstName: string;
  lastName: string;
  words: GrammarWord[];
  createdAt: Date;
  deletedAt: Date;
}
