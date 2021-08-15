import { AuthUser } from './auth-user.interface';
import { GoogleUserDto } from '../dtos/google-user.dto';

export interface AuthUserService {
  findById(id: number): Promise<AuthUser>;
  findOrSave(googleDto: Partial<GoogleUserDto>): Promise<AuthUser>;
}
