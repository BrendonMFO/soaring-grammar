import { Readable } from 'stream';
import { Inject, Injectable } from '@nestjs/common';
import { Dump } from '../interfaces/dump.interface';
import { DumpItem } from '../interfaces/dump-item.interface';
import { DUMP_DATA_SERVICE } from '../constants/dump.constants';
import { DumpDataService } from '../interfaces/dump-data-service.interface';

@Injectable()
export class DumpService {
  @Inject(DUMP_DATA_SERVICE)
  private readonly dumpDataService: DumpDataService;

  async dump(items: DumpItem[]): Promise<Dump> {
    const { filename, text } = await this.dumpDataService.dump(items);
    return {
      filename,
      stream: Readable.from([text]),
    };
  }
}
