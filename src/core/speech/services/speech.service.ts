import {
  SPEECH_WRITE_FILE,
  SPEECH_DATA_SERVICE,
} from '../constants/speech.constants';
import { Inject, Injectable } from '@nestjs/common';
import { PathOrFileDescriptor, WriteFileOptions } from 'fs';
import { SpeechDataService } from '../interfaces/speech-data-service.interface';
import { GrammarPhrase } from '@core/grammar/interfaces/grammar-phrase.interface';
import { GRAMMAR_DATA_SERVICE } from '@core/grammar/constants/grammar-keys.constants';
import { GrammarDataService } from '@core/grammar/interfaces/grammar-data-service.interface';

@Injectable()
export class SpeechService {
  @Inject(SPEECH_WRITE_FILE)
  private readonly writeFile: (
    path: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    options?: WriteFileOptions,
  ) => Promise<void>;

  @Inject(SPEECH_DATA_SERVICE)
  private readonly speechDataService: SpeechDataService;

  @Inject(GRAMMAR_DATA_SERVICE)
  private readonly grammarDataService: GrammarDataService;

  async synthesize(grammarPhraseId: string): Promise<GrammarPhrase> {
    const grammarPhrase = await this.grammarDataService.getGrammarPhraseById(
      grammarPhraseId,
    );

    const result = await this.speechDataService.synthesize(
      grammarPhrase.phrase,
    );

    await this.writeFile(`audios/${grammarPhrase.id}.mp3`, result, 'binary');

    grammarPhrase.synthesized = true;

    return this.grammarDataService.save(grammarPhrase);
  }
}
