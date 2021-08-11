import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { GoogleUserDto } from '../dtos/google-user.dto';
import { UserService } from '@modules/user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(googleUserDto: GoogleUserDto): Promise<{ token: string }> {
    const apiUser = await this.userService.findOrSave(googleUserDto);
    const token = this.jwtService.sign({ id: apiUser.id });
    return { token };
  }
}
