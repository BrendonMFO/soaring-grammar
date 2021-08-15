import { Observable } from 'rxjs';
import { TranslationParams } from './translation-params.interface';
import { TranslationResultDto } from './translation-result-dto.interface';

export interface TranslationDataService {
  translate(
    translateDataDto: TranslationParams,
  ): Observable<TranslationResultDto>;
}
