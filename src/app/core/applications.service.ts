import {Observable} from 'rxjs/Observable';

export abstract class ApplicationsService {
  public applications$: Observable<any[]>;

  public abstract get(id: string): any;

  public abstract update(id: string, application: any): any;

  public abstract delete(key: string): any;

  public currencies = [
    { value: 'eur', display: '€' },
    { value: 'usd', display: '$' },
    { value: 'sek', display: 'sek' }
  ];
  public billings = [
    { value: 'hourly', display: 'Hourly' },
    { value: 'daily', display: 'Daily' },
    { value: 'weekly', display: 'Weekly' },
    { value: 'monthly', display: 'Monthly' }
  ];
  public timeUnits = [
    { value: 'hour', display: 'Hour' },
    { value: 'day', display: 'Day' },
    { value: 'week', display: 'Week' },
    { value: 'month', display: 'Month' }
  ];
  public beforeAfter = [
    { value: 'before', display: 'Before' },
    { value: 'after', display: 'After' }
  ];
}
