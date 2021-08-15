import { TranslationDataDto } from '../interfaces/translation-data-dto.interface';

export class TranslationDto implements TranslationDataDto {
  readonly tl: string;
  readonly sl?: string;
}
