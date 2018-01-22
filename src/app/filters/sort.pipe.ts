import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): any {
    if (array) {

      // get the first element
      // let orderByValue = args[0]
      let orderByValue = args
      let byVal = 1

      // check if exclamation point 

      if (orderByValue.charAt(0) == "!") {
        // reverse the array
        byVal = -1
        orderByValue = orderByValue.substring(1)
      }
      // console.log("byVal", byVal);
      // console.log("orderByValue", orderByValue);

      array.sort((a: any, b: any) => {
        if (a[orderByValue] < b[orderByValue]) {
          return -1 * byVal;
        } else if (a[orderByValue] > b[orderByValue]) {
          return 1 * byVal;
        } else {
          return 0;
        }
      });
      return array;
    }
  }

}
