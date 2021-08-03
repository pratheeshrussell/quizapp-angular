import { Pipe, PipeTransform } from '@angular/core';
import { AppConstants } from '../constants/app-constants';

@Pipe({
  name: 'transformResult'
})
export class TransformResultPipe implements PipeTransform {
  transform(value: number | string, totalCount: number | string): string {
    return AppConstants.resultText.replace('{correct}', value.toString())
    .replace('{total}', totalCount.toString());
  }
}
