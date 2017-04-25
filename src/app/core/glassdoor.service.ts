import {Injectable} from '@angular/core';
import {Headers, Jsonp} from '@angular/http';
import {Company} from './model/company';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GlassdoorService {
  private baseUrl = 'https://api.glassdoor.com/api/api.htm';

  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private jsonp: Jsonp) {
  }

  public search(term: string): Observable<Company[]> {
    return this.jsonp.get(this.baseUrl,
      {
        params: {
          v: '1',
          format: 'json',
          't.p': '134053',
          't.k': 'c4Mca5Tnat5',
          action: 'employers',
          callback: 'JSONP_CALLBACK',
          q: term
        },
        headers: this.headers
      }
    )
      .map(this.mapResults)
      .catch(this.handleError);
  }

  private mapResults: (Response) => Company[] =
    response => response.json().response.employers.map(this.toCompany);

  private toCompany: (any) => Company =
    r => <Company> {
      id: r.id,
      name: r.name,
      website: r.website,
      squareLogo: r.squareLogo,
      industry: r.industry
    }

  private handleError(error: any) {
    console.log('There has been a problem:' + error);
    return Observable.of([]);
  }
}

