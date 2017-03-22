import {Reminder} from './reminder';
export class Deadline {
  public what = '';
  public when = new Date();
  public reminder = new Reminder();
}
