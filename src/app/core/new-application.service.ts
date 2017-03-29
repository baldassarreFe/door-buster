import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';

@Injectable()
export class NewApplicationService {
  constructor() {
  }

  public newApplication() {
    return {
      'company': {
        'businessArea': null,
        'employees': null,
        'glassdoorId': null,
        'linkedinId': null,
        'website': null,
        'squareLogo': null,
        'name': null
      },
      'position': {
        'attachments': [],
        'expectedSalary': {
          'billing': null,
          'currency': null,
          'value': null
        },
        'notes': null,
        'title': null
      },
      'status': 'dreamingOf',
      'applied': {
        'applicationDate': null,
        'documents': [],
        'followUpReminder': {
          'beforeAfter': null,
          'howMuch': null,
          'unit': null
        }
      },
      'dreamingOf': {
        'contactPerson': {
          'email': null,
          'name': null,
          'phone': null,
          'role': null
        },
        'deadlines': []
      },
      'gotcha': {
        'contract type': null,
        'deadline': null,
        'notes': null,
        'outcome': null,
        'salary': {
          'billing': null,
          'currency': null,
          'value': null
        },
        'starting date': null
      },
      'ongoing': {
        'events': []
      }
    };
  }
}
