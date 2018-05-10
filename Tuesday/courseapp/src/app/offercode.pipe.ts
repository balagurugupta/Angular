import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg <150) {
      return "ASDASDASD";
    } else if(arg>= 150 && arg<= 251) {
      return "SFSFSFSFFS";
    } else if(arg > 251 && arg < 400) {
      return "SGSDGDSRJFDTHDYRH";
    } else {
      return "NVNVNDUFJGNDFJN";
    }
    
  }

}
