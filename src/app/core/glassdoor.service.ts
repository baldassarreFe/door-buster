import {Injectable} from "@angular/core";
import {Http, Response, Headers, Jsonp} from "@angular/http";
import {Company} from "./model/company";
import {Observable} from "rxjs/Rx";

@Injectable()
export class GlassdoorService {

  private baseUrl = 'http://api.glassdoor.com/api';

  constructor(private http: Http, private jsonp: Jsonp) {
  }

  search(term: string): Observable<Company[]> {
    // console.log(term);
    return this.jsonp.get(
        'http://api.glassdoor.com/api/api.htm?' +
        'v=1&' +
        'format=json&' +
        't.p=134053&' +
        't.k=c4Mca5Tnat5&' +
        'action=employers&' +
        'callback=JSONP_CALLBACK&' +
        'q=' + term,
        {headers: this.getHeaders()})
      .map(mapResults)
      .catch(handleError);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}

function mapResults(response: Response): Company[] {
  return response.json().response.employers.map(toCompany)
}

function toCompany(r:any): Company{
  return <Company>({
  	id: r.id,
  	name: r.name,
    website:r.website,
    squareLogo: r.squareLogo,
    industry:r.industry
  });
}

function handleError(error: any) {
  // console.log(error.message || 'There is a problem');
  return Observable.of([]);
}

