import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Company } from './model/company';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GlassdoorService{
	private baseUrl: string='http://api.glassdoor.com/api';
	constructor (private http: Http) {}

	search(term:string):Observable<Company[]>{
			// console.log(term);
		let company$ = this.http
		      .get('http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=134053&t.k=c4Mca5Tnat5&action=employers&q='+term, {headers: this.getHeaders()})
		      .map(mapResults)
		      .catch(handleError);
		      return company$;
	}

	private getHeaders(){
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    return headers;
	 }
	
}

function mapResults(response:Response): Company[]{
   return response.json().response.employers.map(toCompany)
}
function toCompany(r:any): Company{
  let company = <Company>({
  	id: r.id,
  	name: r.name,
    website:r.website,
    squareLogo: r.squareLogo,
    industry:r.industry
  });
  return company;
}

function handleError (error: any) {
  let errorMsg = error.message || 'There is a problem'
  // console.error(errorMsg);
  return Observable.throw(errorMsg);
}

