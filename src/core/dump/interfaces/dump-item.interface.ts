export interface DumpItem {
  originalText: string;
  translatedText: string;
  originalAudioFile?: string;
  translatedAudioFile?: string;
  highlightedOriginalWords?: string[];
  highlightedTranslatedWords?: string[];
}
