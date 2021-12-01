import { Inject, Injectable } from '@nestjs/common';
import { Dump } from '@core/dump/interfaces/dump.interface';
import { DumpService } from '@core/dump/services/dump.service';
import { DumpItem } from '@core/dump/interfaces/dump-item.interface';
import { GrammarService } from '@core/grammar/services/grammar.service';

@Injectable()
export class GrammarDumpService {
  @Inject()
  private readonly dumpService: DumpService;

  @Inject()
  private readonly grammarService: GrammarService;

  async dumpByUserId(userId: number): Promise<Dump> {
    const grammar = await this.grammarService.getCompletedGrammarByUser(userId);

    const dumpItems: DumpItem[] = grammar.map((grammarPhrase) => ({
      originalText: grammarPhrase.phrase,
      translatedText: grammarPhrase.translatedPhrase,
      highlightedOriginalWords: [grammarPhrase.grammarWord.word],
      originalAudioFile: `${grammarPhrase.id}.mp3`,
    }));

    return this.dumpService.dump(dumpItems);
  }
}
