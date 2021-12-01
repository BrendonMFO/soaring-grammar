import { DumpItem } from './dump-item.interface';
import { DumpDataResult } from './dump-data-result.interface';

export interface DumpDataService {
  dump(items: DumpItem[]): Promise<DumpDataResult>;
}
