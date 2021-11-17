import { Module } from '@nestjs/common';
import { SpeechService } from './services/speech.service';
import { speechWriteFileProvider } from './providers/speech-write-file.provider';

@Module({
  providers: [speechWriteFileProvider(), SpeechService],
  exports: [SpeechService],
})
export class SpeechModule {}
