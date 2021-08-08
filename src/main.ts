import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ApiConfigService } from './modules/api-config/services/api-config.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const apiConfigService = app.get(ApiConfigService);
  await app.listen(apiConfigService.apiConfig.port);
}

bootstrap();
