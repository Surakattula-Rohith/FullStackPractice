import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countLength'
})
export class CountLengthPipe implements PipeTransform {
  transform(value: string): number {
    if (typeof value === 'string') {
      return value.length;
    } else {
      return -1;
    }
  }
}

