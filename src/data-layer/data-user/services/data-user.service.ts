import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { CreateUser } from '../../../core/user/interfaces/create-user.interface';
import { AuthUserService } from '@core/auth/interfaces/auth-user-service.interface';
import { UserDataService } from '@core/user/interfaces/user-data-service.interface';

@Injectable()
export class DataUserService implements AuthUserService, UserDataService {
  @InjectRepository(UserEntity)
  private readonly userRepository: Repository<UserEntity>;

  save(userDto: CreateUser): Promise<UserEntity> {
    const newUser = this.userRepository.create(userDto);
    return this.userRepository.save(newUser);
  }

  findById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  async findOrSave(userDto: CreateUser): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      googleId: userDto.googleId,
    });
    return user ?? this.save(userDto);
  }
}
