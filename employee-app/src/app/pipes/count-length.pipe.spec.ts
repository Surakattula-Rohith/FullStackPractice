import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countLength'
})
export class CountLengthPipe implements PipeTransform {

  transform(value : string) {
    return value.toString().length;
  }

}
