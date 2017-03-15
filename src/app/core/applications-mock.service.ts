import {Injectable} from '@angular/core';
import {ApplicationsService} from './applications.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApplicationsMockService extends ApplicationsService {
  public applications$: Observable<any[]>;

  constructor() {
    super();
    this.applications$ = Observable.of(data);
  }
}

const data = [
  {
    'dreaming-of': {
      'company': {
        'name': 'KTH Stories',
        'linkedin-id': 123,
        'glassdoor-id': 456,
        'employees': 5,
        'location': 'KTH Libary',
        'contact-person': {
          'name': 'Mike',
          'role': 'Cook',
          'email': 'mike@mike.com',
          'phone': 123456789
        },
        'business-area': 'Restoration'
      },
      'position': {
        'title': 'Dish washer',
        'notes': 'Need experience with soap',
        'expected-salary': {
          'value': 300,
          'currency': 'SEK',
          'billing': 'hourly'
        },
        'attachments': [
          'link to page',
          'saved document'
        ]
      },
      'deadlines': [
        {
          'what': 'Applications open',
          'when': 'date',
          'reminder': {
            'how-much': 12,
            'unit': 'hour',
            'before-after': 'before'
          }
        },
        {
          'what': 'Applications close',
          'when': 'date',
          'reminder': null
        }
      ]
    },
    'applied': {
      'application-date': 'date',
      'documents': [
        {
          'type': 'Curriculum',
          'document': 'link to doc'
        },
        {
          'type': 'Cover Letter',
          'document': 'link to doc'
        }
      ],
      'follow-up-reminder': {
        'how-much': 1,
        'unit': 'week',
        'before-after': 'after'
      }
      // contact person is the same from dreaming-of
    },
    'ongoing': {
      'events': [
        {
          'title': 'skype interview',
          'date': 'date',
          'notes': 'Nice talk',
          'with': {
            'name': 'Jane',
            'role': 'Cashier',
            'email': 'jane@jane.com',
            'phone': 9876543
          },
          'reminder': {
            'how-much': 2,
            'unit': 'hour',
            'before-after': 'before'
          }
        },
        {
          'title': 'HR interview',
          'date': 'date',
          'notes': 'Too long',
          'with': {
            'name': 'Harry',
            'role': 'HR manager',
            'email': 'harry@harry.com',
            'phone': 675849302
          },
          'reminder': null
        }
      ]
    },
    'gotcha': {
      'outcome': 'offer',
      'contract type': 'seasonal',
      'starting date': 'date',
      'notes': 'Such a cool job, free food all day',
      'deadline': 'date',
      'salary': {
        'value': 300,
        'currency': 'SEK',
        'billing': 'hourly'
      }
    }
  },
  {
    'dreaming-of': {
      'company': {
        'name': 'KTH Stories',
        'linkedin-id': 123,
        'glassdoor-id': 456,
        'employees': 5,
        'location': 'KTH Libary',
        'contact-person': {
          'name': 'Mike',
          'role': 'Cook',
          'email': 'mike@mike.com',
          'phone': 123456789
        },
        'business-area': 'Restoration'
      },
      'position': {
        'title': 'Dish washer',
        'notes': 'Need experience with soap',
        'expected-salary': {
          'value': 300,
          'currency': 'SEK',
          'billing': 'hourly'
        },
        'attachments': [
          'link to page',
          'saved document'
        ]
      },
      'deadlines': [
        {
          'what': 'Applications open',
          'when': 'date',
          'reminder': {
            'how-much': 12,
            'unit': 'hour',
            'before-after': 'before'
          }
        },
        {
          'what': 'Applications close',
          'when': 'date',
          'reminder': null
        }
      ]
    },
    'applied': {
      'application-date': 'date',
      'documents': [
        {
          'type': 'Curriculum',
          'document': 'link to doc'
        },
        {
          'type': 'Cover Letter',
          'document': 'link to doc'
        }
      ],
      'follow-up-reminder': {
        'how-much': 1,
        'unit': 'week',
        'before-after': 'after'
      }
      // contact person is the same from dreaming-of
    },
    'ongoing': {
      'events': [
        {
          'title': 'skype interview',
          'date': 'date',
          'notes': 'Nice talk',
          'with': {
            'name': 'Jane',
            'role': 'Cashier',
            'email': 'jane@jane.com',
            'phone': 9876543
          },
          'reminder': {
            'how-much': 2,
            'unit': 'hour',
            'before-after': 'before'
          }
        },
        {
          'title': 'HR interview',
          'date': 'date',
          'notes': 'Too long',
          'with': {
            'name': 'Harry',
            'role': 'HR manager',
            'email': 'harry@harry.com',
            'phone': 675849302
          },
          'reminder': null
        }
      ]
    },
    'gotcha': {
      'outcome': 'rejected',
      'contract type': 'seasonal',
      'starting date': 'date',
      'notes': 'Such a cool job, free food all day',
      'deadline': 'date',
      'salary': {
        'value': 300,
        'currency': 'SEK',
        'billing': 'hourly'
      }
    }
  }
];
