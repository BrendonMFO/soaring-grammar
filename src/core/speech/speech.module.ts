import { Module } from '@nestjs/common';
import { SpeechService } from './services/speech.service';
import { SpeechController } from './controllers/speech.controller';
import { speechWriteFileProvider } from './providers/speech-write-file.provider';

@Module({
  controllers: [SpeechController],
  providers: [speechWriteFileProvider(), SpeechService],
})
export class SpeechModule {}
