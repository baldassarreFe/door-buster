import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'columnFilter'
})
export class ColumnFilterPipe implements PipeTransform {
    transform(items: Array<any>, status: string): Array<any> {
    	return items?items.filter(item => item.status === status):items;
    }
}