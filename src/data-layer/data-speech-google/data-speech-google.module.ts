import { Module } from '@nestjs/common';
import { googleSpeechProvider } from './providers/data-speech-google.provider';
import { DataSpeechGoogleService } from './services/data-speech-google.service';
import { SPEECH_DATA_SERVICE } from '@core/speech/constants/speech-keys.constants';
import { speechDataServiceProvider } from '@core/speech/providers/speech-data-service.provider';

@Module({
  providers: [
    googleSpeechProvider(),
    DataSpeechGoogleService,
    speechDataServiceProvider(DataSpeechGoogleService),
  ],
  exports: [SPEECH_DATA_SERVICE],
})
export class DataSpeechGoogleModule {}
