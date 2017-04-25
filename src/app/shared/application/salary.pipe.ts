import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Pipe({
  name: 'salaryFormat'
})
export class SalaryPipe implements PipeTransform {

  transform(salary: any, args?: any): any {
    if (salary && !isNullOrUndefined(salary.value)) {
      return salary.value + ' ' + salary.currency.toUpperCase() + (salary.billings ? '/' + salary.billings : '');
    } else {
      return '';
    }
  }

}
