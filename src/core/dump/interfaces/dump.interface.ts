import { Readable } from 'stream';

export interface Dump {
  filename: string;
  stream: Readable;
}
