import { Trim } from '@neuralegion/class-sanitizer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';

export class GrammarPhraseDto implements GrammarPhrase {
  @IsString()
  readonly id: string;

  @Trim()
  @IsString()
  readonly phrase: string;

  @Trim()
  @IsString()
  @IsOptional()
  readonly translatedPhrase?: string;

  @IsBoolean()
  @IsOptional()
  readonly synthesized?: boolean;
}
