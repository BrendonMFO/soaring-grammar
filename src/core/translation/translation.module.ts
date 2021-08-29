import { Module } from '@nestjs/common';
import { GrammarModule } from '@core/grammar/grammar.module';
import { TranslationService } from './services/translation.service';
import { TranslationController } from './controllers/translation.controller';

@Module({
  imports: [GrammarModule],
  controllers: [TranslationController],
  providers: [TranslationService],
})
export class TranslationModule {}
