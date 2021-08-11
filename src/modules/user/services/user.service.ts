import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { CreateUser } from '../interfaces/create-user.interface';

@Injectable()
export class UserService {
  @InjectRepository(UserEntity)
  private readonly userRepository: Repository<UserEntity>;

  save(userDto: CreateUser): Promise<UserEntity> {
    const newUser = this.userRepository.create(userDto);
    return this.userRepository.save(newUser);
  }

  find(where: FindConditions<UserEntity>): Promise<UserEntity> {
    return this.userRepository.findOne({ where });
  }

  async findOrSave(userDto: CreateUser): Promise<UserEntity> {
    const user = await this.find({ googleId: userDto.googleId });
    return user ?? this.save(userDto);
  }
}
