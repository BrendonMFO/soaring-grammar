import { User } from './user.interface';
import { CreateUser } from './create-user.interface';

export interface UserDataService {
  save(userDto: CreateUser): Promise<User>;
  findById(id: number): Promise<User>;
  findOrSave(userDto: CreateUser): Promise<User>;
}
