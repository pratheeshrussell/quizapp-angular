import { Pipe, PipeTransform } from '@angular/core';
import { SupportService } from '../services/support.service';

@Pipe({
  name: 'arrayShuffle'
})
export class ArrayShufflePipe implements PipeTransform {
  constructor(private supportService: SupportService) {}
  transform(value: string[], ...args: unknown[]): any[] {
    return this.supportService.arrayShuffle(value.slice());
  }
}
