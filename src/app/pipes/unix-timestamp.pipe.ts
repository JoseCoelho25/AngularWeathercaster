import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTimestamp'
})
export class UnixTimestampPipe implements PipeTransform {

  transform(value: number, includeSeconds: boolean = false): string {
    // Variable to determine if i want the response to include seconds or not
    const endSlice = includeSeconds ? -5 : -8;
    //Conversion from Unix to date
    const s = new Date(value * 1e3).toISOString().slice(-13, endSlice);
    return s;
  }

}
