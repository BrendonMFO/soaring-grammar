import { AuthGuard } from '@nestjs/passport';
import { VocabService } from '../services/vocab.service';
import { AuthUser } from '@core/auth/decorators/auth-user.decorator';
import { UserEntity } from '@data-layer/data-user/entities/user.entity';
import { VocabDbInterceptor } from '../interceptors/vocab-db.interceptor';
import { Post, Controller, UseInterceptors, UseGuards } from '@nestjs/common';
import { GrammarWord } from '@core/grammar/interfaces/grammar-word.interface';
import { AuthGuardType } from '@core/auth/constants/auth-guard-type.constants';

@UseInterceptors(VocabDbInterceptor)
@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({ version: '1', path: 'vocab' })
export class VocabController {
  constructor(private readonly vocabService: VocabService) {}

  @Post()
  uploadVocab(@AuthUser() user: UserEntity): Promise<GrammarWord[]> {
    return this.vocabService.uploadVocab(user.id);
  }
}
