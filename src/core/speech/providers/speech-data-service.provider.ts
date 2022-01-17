import { ExistingProvider, Type } from '@nestjs/common';
import { SPEECH_DATA_SERVICE } from '../constants/speech-keys.constants';
import { SpeechDataService } from '../interfaces/speech-data-service.interface';

export const speechDataServiceProvider = (
  classType: Type<SpeechDataService>,
): ExistingProvider<SpeechDataService> => ({
  provide: SPEECH_DATA_SERVICE,
  useExisting: classType,
});
