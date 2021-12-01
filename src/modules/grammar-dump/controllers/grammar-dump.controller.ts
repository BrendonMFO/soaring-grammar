import {
  Get,
  Inject,
  Response,
  UseGuards,
  Controller,
  StreamableFile,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response as ExpressResponse } from 'express';
import { User } from '@core/user/interfaces/user.interface';
import { AuthUser } from '@core/auth/decorators/auth-user.decorator';
import { GrammarDumpService } from '../services/grammar-dump.service';
import { AuthGuardType } from '@core/auth/constants/auth-guard-type.constants';

@UseGuards(AuthGuard(AuthGuardType.JWT))
@Controller({ path: 'grammar-dump', version: ['1'] })
export class GrammarDumpController {
  @Inject()
  private readonly grammarDumpService: GrammarDumpService;

  @Get()
  async dump(
    @AuthUser() user: User,
    @Response({ passthrough: true }) res: ExpressResponse,
  ): Promise<StreamableFile> {
    const { stream, filename } = await this.grammarDumpService.dumpByUserId(
      user.id,
    );

    res.set({
      'Content-Type': 'application/text',
      'Content-Disposition': `attachment; filename="${filename}"`,
    });

    return new StreamableFile(stream);
  }
}
