import {
  GOOGLE_SPEECH,
  GOOGLE_WAVENET_KEY,
} from '../constants/data-speech-googleconstants';
import { Inject, Injectable } from '@nestjs/common';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { SpeechDataService } from '@core/speech/interfaces/speech-data-service.interface';

@Injectable()
export class DataSpeechGoogleService implements SpeechDataService {
  @Inject(GOOGLE_SPEECH)
  private readonly googleSpeech: TextToSpeechClient;

  async synthesize(text: string): Promise<string | Uint8Array> {
    const [response] = await this.googleSpeech.synthesizeSpeech({
      input: { text },
      audioConfig: { audioEncoding: 'MP3' },
      voice: { languageCode: 'en-US', name: this.randomVoice() },
    });
    return response.audioContent;
  }

  private randomVoice(): string {
    const alpha = Array.from(Array(10)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    const index = Math.floor(Math.random() * 10);
    return `${GOOGLE_WAVENET_KEY}${alphabet[index]}`;
  }
}
