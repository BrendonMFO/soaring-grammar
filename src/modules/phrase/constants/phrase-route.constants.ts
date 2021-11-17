export const PHRASE_ROUTE_PATH = 'phrase';

export const PHRASE_ROUTE_VERSIONS = ['1'];

export enum PhraseRoutes {
  PHRASE_DATABASE = 'database',
  PHRASE_TRANSLATE = ':phraseId/translate',
  PHRASE_SYNTHESIZE = ':phraseId/synthesise',
}
