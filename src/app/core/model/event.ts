import {Reminder} from './reminder';
export class Event {
  public title = '';
  public notes = '';
  public date = new Date();
  public reminder = new Reminder();
  public with = {
    name: '',
    email: '',
    phone: '',
    role: ''
  };
}
