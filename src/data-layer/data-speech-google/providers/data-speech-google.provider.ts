import { FactoryProvider } from '@nestjs/common';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { GOOGLE_SPEECH } from '../constants/data-speech-googleconstants';

export const googleSpeechProvider = (): FactoryProvider => ({
  provide: GOOGLE_SPEECH,
  useFactory: (): TextToSpeechClient => new TextToSpeechClient(),
});
