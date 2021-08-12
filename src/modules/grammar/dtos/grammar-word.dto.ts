import { Type } from 'class-transformer';
import { GrammarPhraseDto } from './grammar-phrase.dto';
import { IsString, ValidateNested } from 'class-validator';
import { Trim, SanitizeNested } from '@neuralegion/class-sanitizer';
import { GrammarWord } from '../interfaces/grammar-word.interface';

export class GrammarWordDto implements GrammarWord {
  @IsString()
  readonly id: string;

  @Trim()
  @IsString()
  readonly word: string;

  @Trim()
  @IsString()
  readonly stem: string;

  @SanitizeNested()
  @ValidateNested()
  @Type(() => GrammarPhraseDto)
  readonly phrases: GrammarPhraseDto[];
}
