import { Injectable } from '@angular/core';

@Injectable()
export class FilterTextService {
  filter<T>(data: string, props: string[], originalList: T[]): T[] {
    let filteredList: T[] = [];

    if(data && props && originalList) {
      data = data.toLowerCase();
      
      let filtered = originalList.filter(item => {
        let match = false;

        for(let prop of props) {
          if(item[prop].toString().toLowerCase().indexOf(data) > -1) {
            match = true;
            break;
          }
        }

        return match;
      });

      filteredList = filtered;
    }
    else {
      filteredList = originalList;
    }

    return filteredList;
  }
}
