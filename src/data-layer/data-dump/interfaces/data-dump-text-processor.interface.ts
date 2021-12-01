import { DataDumpItem } from './data-dump-item.interface';

export interface DataDumpTextProcessor {
  dumpLine(dataDumpItem: DataDumpItem): string;
  highlightWord(phrase: string, word: string): string;
  highlightWords(phrase: string, words?: string[]): string;
}
