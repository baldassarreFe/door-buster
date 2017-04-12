import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicationStatus'
})
export class ApplicationStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // amazing how simple this pipe is, close to useless
    switch (value.toLowerCase()) {
        case 'dreamingof':
          return 'Dreaming Of!';
        case 'applied':
          return 'Applied';
        case 'ongoing':
          return 'Ongoing';
        case 'gotcha':
          return 'Gotcha!';
      default:
        return value;
      }
  }

}
