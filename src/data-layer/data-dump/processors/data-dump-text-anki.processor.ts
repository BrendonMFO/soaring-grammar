import { format } from 'util';
import { DataDumpType } from '../constants/data-dump-type.constants';
import { DataDumpItem } from '../interfaces/data-dump-item.interface';
import { TextProcessor } from '../decorators/data-dump-text-processor.decorator';
import { DataDumpTextProcessor } from '../interfaces/data-dump-text-processor.interface';

@TextProcessor(DataDumpType.ANKI)
export class DataDumpTextAnkiProcessor implements DataDumpTextProcessor {
  private static DUMP_PATTERN = '%s [sound:%s]	%s <br><br> <br><br>';

  private static HIGHLIGHT_PATTERN = '<u><i><b>%s</b></i></u>';

  dumpLine(dataDumpItem: DataDumpItem): string {
    return format(
      DataDumpTextAnkiProcessor.DUMP_PATTERN,
      dataDumpItem.originalPhrase,
      dataDumpItem.audioFileName,
      dataDumpItem.translatedPhrase,
    );
  }

  highlightWords(phrase: string, words?: string[]): string {
    if (!words) return phrase;
    let highlightedPhrase = phrase;
    for (const word of words) {
      highlightedPhrase = this.highlightWord(highlightedPhrase, word);
    }
    return highlightedPhrase;
  }

  highlightWord(phrase: string, word: string): string {
    const highlightedWord = format(
      DataDumpTextAnkiProcessor.HIGHLIGHT_PATTERN,
      word,
    );
    return phrase.replaceAll(word, highlightedWord);
  }
}
