import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrammarModule } from './grammar/grammar.module';
import { ApiConfigModule } from './api-config/api-config.module';
import { TranslationModule } from './translation/translation.module';

@Module({
  imports: [GrammarModule, TypeOrmModule, ApiConfigModule, TranslationModule],
})
export class AppModule {}
