import { TranslationDataDto } from '../interfaces/translation-data-dto.interface';

export class TranslationDto implements TranslationDataDto {
  readonly text: string;
  readonly sourceLanguage?: string;
  readonly destinationLanguage: string;
}
