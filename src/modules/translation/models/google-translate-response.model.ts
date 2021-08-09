import { Type, Expose } from 'class-transformer';

export class GoogleTranslatePair {
  @Expose()
  readonly s: string;

  @Expose()
  readonly t: string;
}

export class GoogleTranslateLanguage {
  @Expose()
  readonly iso: string;

  @Expose()
  readonly didYouMean: boolean;
}

export class GoogleTranslateText {
  @Expose()
  readonly value: string;

  @Expose()
  readonly didYouMean: boolean;

  @Expose()
  readonly autoCorrected: boolean;
}

export class GoogleTranslateSource {
  @Expose()
  readonly text: GoogleTranslateText;

  @Type(() => GoogleTranslateLanguage)
  readonly language: GoogleTranslateLanguage;
}

export class GoogleTranslateData {
  @Expose()
  readonly translation: string;

  @Expose()
  readonly pronunciation: string;

  @Type(() => GoogleTranslatePair)
  readonly pairs: GoogleTranslatePair[];

  @Expose()
  @Type(() => GoogleTranslateData)
  readonly source: GoogleTranslateSource;
}

export class GoogleTranslateResponse {
  @Expose()
  readonly code: number;

  @Expose()
  readonly message: string;

  @Expose()
  @Type(() => GoogleTranslateData)
  readonly data: GoogleTranslateData;
}
