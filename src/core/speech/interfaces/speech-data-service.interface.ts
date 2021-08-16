export interface SpeechDataService {
  synthesize(text: string): Promise<string | Uint8Array>;
}
