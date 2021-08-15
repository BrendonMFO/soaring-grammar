import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { DataUserService } from './services/data-user.service';
import { USER_DATA_SERVICE } from '@core/user/constants/user-keys.constants';
import { userDataServiceProvider } from '@core/user/providers/user-data-service.provider';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [DataUserService, userDataServiceProvider(DataUserService)],
  exports: [USER_DATA_SERVICE],
})
export class DataUserModule {}
