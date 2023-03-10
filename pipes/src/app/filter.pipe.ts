import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filter: string, propName: string): any {
    if (value.length === 0|| !filter) {
      return value;
    }
    const resultsArray = [];
    for (const item of value) {
      if (item[propName] === filter) {
        resultsArray.push(item);
      }
    }
    return resultsArray;
  }
}
