import { Type, Expose } from 'class-transformer';

export class GoogleTranslatePairDto {
  @Expose()
  readonly s: string;

  @Expose()
  readonly t: string;
}

export class GoogleTranslateLanguageDto {
  @Expose()
  readonly iso: string;

  @Expose()
  readonly didYouMean: boolean;
}

export class GoogleTranslateTextDto {
  @Expose()
  readonly value: string;

  @Expose()
  readonly didYouMean: boolean;

  @Expose()
  readonly autoCorrected: boolean;
}

export class GoogleTranslateSourceDto {
  @Expose()
  readonly text: GoogleTranslateTextDto;

  @Type(() => GoogleTranslateLanguageDto)
  readonly language: GoogleTranslateLanguageDto;
}

export class GoogleTranslateDataDto {
  @Expose()
  readonly translation: string;

  @Expose()
  readonly pronunciation: string;

  @Type(() => GoogleTranslatePairDto)
  readonly pairs: GoogleTranslatePairDto[];

  @Expose()
  @Type(() => GoogleTranslateDataDto)
  readonly source: GoogleTranslateSourceDto;
}

export class GoogleTranslateResponseDto {
  @Expose()
  readonly code: number;

  @Expose()
  readonly message: string;

  @Expose()
  @Type(() => GoogleTranslateDataDto)
  readonly data: GoogleTranslateDataDto;
}
