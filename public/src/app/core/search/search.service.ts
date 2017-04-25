import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "app/products/product";

@Injectable()
export class SearchService {
  private searchUrl = 'api/search';

  constructor(private http: Http) { }

  search(term: string): Observable<Product[]> {
    if(!term.length) return Observable.of([]);
    
    let params = new URLSearchParams();
    params.set('search', term);

    return this.http.get(this.searchUrl, { search: params })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  /////////////////////////////////////////////////////

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
