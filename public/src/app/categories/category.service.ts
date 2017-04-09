import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";

import { Category } from './category';

@Injectable()
export class CategoryService {
  private categoriesUrl = '/api/categories';

  constructor(private http: Http) { }

  getCategories(): Observable<Category[]> {
    return this.http.get(this.categoriesUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  
  getCategory(id: number): Observable<Category> {
    return this.http.get(`${this.categoriesUrl}/${id}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  addCategory(category: Category): Observable<number> {
    return this.http.post(this.categoriesUrl, JSON.stringify(category))
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  ///////////////////////////////////////////////

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
