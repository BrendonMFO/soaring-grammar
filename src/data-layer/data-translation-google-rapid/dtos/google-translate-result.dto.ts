import { TranslationResultDto } from '@core/translation/interfaces/translation-result-dto.interface';

export class GoogleTranslateResultDto implements TranslationResultDto {
  originalText: string;
  translatedResults: string[];
}
