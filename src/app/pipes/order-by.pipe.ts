import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';


@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(array: any, sortBy: string, order?: boolean | 'asc' | 'desc'): any[] {
    const sortOrder = order ? order : 'none'; // setting default ascending order
    if (sortOrder === 'none') {
      return array
    } else {
      return orderBy(array, [sortBy], [sortOrder]);
    }
  }
}
