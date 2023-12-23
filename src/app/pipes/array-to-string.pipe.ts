import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {

  transform(value: any): string {
    let copyArr: any[] = []
    value.forEach((e: any) => {
      copyArr.push(e.type.name)
    })
    return copyArr.join(' - ');
  }

}
