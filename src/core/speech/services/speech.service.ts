import {
  SPEECH_WRITE_FILE,
  SPEECH_DATA_SERVICE,
} from '../constants/speech-keys.constants';
import { format } from 'util';
import { Inject, Injectable } from '@nestjs/common';
import { SPEECH_AUDIO_PATH } from '../constants/speech.constants';
import { WriteFile } from '../providers/speech-write-file.provider';
import { SpeechDataService } from '../interfaces/speech-data-service.interface';

@Injectable()
export class SpeechService {
  @Inject(SPEECH_WRITE_FILE)
  private readonly writeFile: WriteFile;

  @Inject(SPEECH_DATA_SERVICE)
  private readonly speechDataService: SpeechDataService;

  async synthesize(phraseId: string, phrase: string): Promise<void> {
    const result = await this.speechDataService.synthesize(phrase);
    const path = format(SPEECH_AUDIO_PATH, phraseId);
    return this.writeFile(path, result, 'binary');
  }
}
