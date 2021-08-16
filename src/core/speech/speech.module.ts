import { SpeechService } from './services/speech.service';
import { GrammarModule } from '@core/grammar/grammar.module';
import { DynamicModule, Module, Type } from '@nestjs/common';
import { SpeechController } from './controllers/speech.controller';
import { speechWriteFileProvider } from './providers/speech-write-file.provider';

@Module({
  controllers: [SpeechController],
  providers: [speechWriteFileProvider(), SpeechService],
})
export class SpeechModule {
  static forModule(
    classModule: DynamicModule | Type,
    grammarDataModule: DynamicModule | Type,
  ): DynamicModule {
    return {
      module: SpeechModule,
      imports: [classModule, GrammarModule.forModule(grammarDataModule)],
      exports: [classModule],
    };
  }
}
