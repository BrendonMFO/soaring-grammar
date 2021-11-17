import { TranslationDataDto } from '@core/translation/interfaces/translation-data-dto.interface';

export class PhraseTranslateDto implements TranslationDataDto {
  readonly tl: string;
  readonly sl?: string;
}
