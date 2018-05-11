import { Pipe, PipeTransform } from '@angular/core';
import { AppHttpService } from './app-http.service';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(public appHttpService: AppHttpService) { }
  transform(value: any, search: string): any {
    if (!search) {
      return value;

    }
    return value.filter(it => {
      let data = it.name ? it.name : it.aliases[0]
      return data.toLowerCase().includes(search.toLowerCase());

    });


  }
}
