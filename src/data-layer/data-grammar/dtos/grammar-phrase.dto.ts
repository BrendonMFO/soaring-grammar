import { IsString } from 'class-validator';
import { Trim } from '@neuralegion/class-sanitizer';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';

export class GrammarPhraseDto implements GrammarPhrase {
  @IsString()
  readonly id: string;

  @Trim()
  @IsString()
  readonly phrase: string;
}
