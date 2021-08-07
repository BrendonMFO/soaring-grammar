import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiConfig } from '../interface/api-config.interface';

@Injectable()
export class ApiConfigService {
  constructor(private readonly configService: ConfigService) {}

  get apiConfig(): ApiConfig {
    return {
      port: this.configService.get<number>('API_PORT'),
    };
  }
}
