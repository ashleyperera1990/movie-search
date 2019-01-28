import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'textLimit'})
export class TextLimitPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    } else {
      return value;
    }
  }
}
