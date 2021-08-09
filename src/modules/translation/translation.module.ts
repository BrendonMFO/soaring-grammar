import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TranslationService } from './services/translation.service';
import { TranslationController } from './controllers/translation.controller';
import { ApiConfigService } from '@modules/api-config/services/api-config.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [ApiConfigService],
      useFactory: ({
        rapidApiConfig: { googleTranslate },
      }: ApiConfigService) => ({
        baseURL: googleTranslate.url,
        headers: {
          'x-rapidapi-key': googleTranslate.key,
          'x-rapidapi-host': googleTranslate.host,
          'content-type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
  ],
  controllers: [TranslationController],
  providers: [TranslationService],
  exports: [TranslationService],
})
export class TranslationModule {}
