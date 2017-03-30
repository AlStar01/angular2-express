import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number, trailing: string): string {
    let trailingCharacters = trailing || '...';

    return value.length > limit ? value.substring(0, limit) + trailingCharacters : value;
  }

}
