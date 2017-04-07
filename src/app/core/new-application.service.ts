import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';

@Injectable()
export class NewApplicationService {
  constructor() {
  }

  // When uploading to firebase all null values and empty arrays get deleted,
  // so when we retrieve back the application we get errors like
  // "cannot read property x of undefined"
  //
  // The fastest solution is to start with empty strings rather than nulls
  // I'm still thinking what to do with the arrays, maybe just check them when importing
  // and add them manually if not present
  public newApplication() {
    return {
      'company': {
        'businessArea': '',
        'employees': '',
        'glassdoorId': '',
        'linkedinId': '',
        'website': '',
        'squareLogo': '',
        'name': ''
      },
      'position': {
        'attachments': [],
        'expectedSalary': {
          'billing': '',
          'currency': '',
          'value': ''
        },
        'notes': '',
        'title': ''
      },
      'status': 'dreamingOf',
      'applied': {
        'applicationDate': '',
        'documents': [],
        'followUpReminder': {
          'beforeAfter': '',
          'howMuch': '',
          'unit': ''
        }
      },
      'dreamingOf': {
        'contactPerson': {
          'email': '',
          'name': '',
          'phone': '',
          'role': ''
        },
        'deadlines': []
      },
      'gotcha': {
        'contractType': '',
        'deadline': '',
        'notes': '',
        'outcome': '',
        'salary': {
          'billing': '',
          'currency': '',
          'value': ''
        },
        'startingDate': ''
      },
      'ongoing': {
        'events': []
      }
    };
  }
}
