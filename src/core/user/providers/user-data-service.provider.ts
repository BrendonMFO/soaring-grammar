import { ExistingProvider, Type } from '@nestjs/common';
import { USER_DATA_SERVICE } from '../constants/user-keys.constants';
import { UserDataService } from '../interfaces/user-data-service.interface';

export const userDataServiceProvider = (
  classType: Type<UserDataService>,
): ExistingProvider => ({
  provide: USER_DATA_SERVICE,
  useExisting: classType,
});
