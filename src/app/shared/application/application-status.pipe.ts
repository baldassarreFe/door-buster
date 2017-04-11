import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicationStatus'
})
export class ApplicationStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // amazing how simple this pipe is, close to useless
    switch (value.toLowerCase()) {
        case 'dreamingof':
          return 'dreaming';
        /*case 'applied':
          return 'applied';
        case 'ongoing':
          return 'ongoing';
        case 'gotcha':
          return 'gotcha';*/
      default:
        return value;
      }
  }

}
