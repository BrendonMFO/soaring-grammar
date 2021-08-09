import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiConfig } from '../interfaces/api-config.interface';
import { RapidApiConfig } from '../interfaces/rapid-api-config.interface';

@Injectable()
export class ApiConfigService {
  constructor(private readonly configService: ConfigService) {}

  get apiConfig(): ApiConfig {
    return {
      port: this.configService.get<number>('API_PORT'),
    };
  }

  get rapidApiConfig(): RapidApiConfig {
    return {
      googleTranslate: {
        url: this.configService.get<string>('RAPID_API_GOOGLE_TRANSLATE_URL'),
        key: this.configService.get<string>('RAPID_API_GOOGLE_TRANSLATE_KEY'),
        host: this.configService.get<string>('RAPID_API_GOOGLE_TRANSLATE_HOST'),
      },
    };
  }
}
