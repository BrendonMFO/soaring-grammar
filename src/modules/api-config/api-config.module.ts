import { ConfigModule } from '@nestjs/config';
import { Global, Module } from '@nestjs/common';
import { ApiConfigService } from './service/api-config.service';
import { validationSchema } from './utils/api-config.validation';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ validationSchema })],
  providers: [ApiConfigService],
  exports: [ApiConfigService],
})
export class ApiConfigModule {}
