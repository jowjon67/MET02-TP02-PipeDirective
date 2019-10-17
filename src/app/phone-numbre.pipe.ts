import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let n : string = value;
    if (!/^[0-9]*$/.test (n)) n = "";
    if (n[0]== '0') n = n.substring(1);
    if (n.length > 9) n = n.substring (0,9);
 
    return "+(33)"+n;
  }
}