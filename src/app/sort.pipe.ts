import { Pipe, PipeTransform } from '@angular/core';
import { AppHttpService } from './app-http.service';
@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  constructor(public appHttpService: AppHttpService) { }
  transform(value: Array<any>, args?: any): any {
    value.sort((a: any, b: any) => {
      let data1 = a.name ? a.name : a.aliases[0];
      let data2 = b.name ? b.name : b.aliases[0];
      if (data1 < data2 ) {
        return -1;
      }
      else if (data1> data2) {
        return 1;
      }
      else {
        return 0;
      }
    });
    return value;
  }

}