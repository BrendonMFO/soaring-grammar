import { Inject } from '@nestjs/common';
import { DumpType } from '@core/dump/constants/dump-type.constants';
import { DumpItem } from '@core/dump/interfaces/dump-item.interface';
import { DumpService } from '@core/dump/decorators/dump-service.decorator';
import { DATA_DUMP_TEXT_PROCESSOR } from '../constants/data-dump.constants';
import { DumpDataResult } from '@core/dump/interfaces/dump-data-result.interface';
import { DumpDataService } from '@core/dump/interfaces/dump-data-service.interface';
import { DataDumpTextProcessor } from '../interfaces/data-dump-text-processor.interface';

@DumpService(DumpType.TEXT)
export class DataDumpTextService implements DumpDataService {
  @Inject(DATA_DUMP_TEXT_PROCESSOR)
  private readonly dataDumpTextProcessor: DataDumpTextProcessor;

  async dump(items: DumpItem[]): Promise<DumpDataResult> {
    const text = items
      .map((item) => {
        const highlightedOriginalPhrase =
          this.dataDumpTextProcessor.highlightWords(
            item.originalText,
            item.highlightedOriginalWords,
          );

        return this.dataDumpTextProcessor.dumpLine({
          audioFileName: item.originalAudioFile,
          translatedPhrase: item.translatedText,
          originalPhrase: highlightedOriginalPhrase,
        });
      })
      .join('\n');

    return {
      text,
      filename: 'dump.text',
    };
  }
}
