import { AuthGuard } from '@nestjs/passport';
import { VocabService } from '../services/vocab.service';
import { UserEntity } from '@modules/user/entities/user.entity';
import { AuthGuardType } from '@modules/auth/shared/auth.constants';
import { AuthUser } from '@modules/auth/decorators/auth-user.decorator';
import { VocabDbInterceptor } from '../interceptors/vocab-db.interceptor';
import { Post, Controller, UseInterceptors, UseGuards } from '@nestjs/common';
import { GrammarWordEntity } from '@modules/grammar/entities/grammar-word.entity';

@UseInterceptors(VocabDbInterceptor)
@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({ version: '1', path: 'vocab' })
export class VocabController {
  constructor(private readonly vocabService: VocabService) {}

  @Post()
  uploadVocab(@AuthUser() user: UserEntity): Promise<GrammarWordEntity[]> {
    return this.vocabService.uploadVocab(user.id);
  }
}
