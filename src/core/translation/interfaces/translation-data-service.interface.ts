import { Observable } from 'rxjs';
import { TranslationDataDto } from './translation-data-dto.interface';
import { TranslationResultDto } from './translation-result-dto.interface';

export interface TranslationDataService {
  translate(
    translateDataDto: TranslationDataDto,
  ): Observable<TranslationResultDto>;
}
