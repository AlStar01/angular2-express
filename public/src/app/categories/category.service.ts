import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";

import { Category } from './category';
import { Product } from "../products/product";

@Injectable()
export class CategoryService {
  private categoriesUrl = '/api/categories';

  constructor(private http: Http) { }

  getCategories(): Observable<Category[]> {
    return this.http.get(this.categoriesUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  
  getCategory(id: number): Observable<{ category: Category, products: Product[] }> {
    return this.http.get(`${this.categoriesUrl}/${id}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post(this.categoriesUrl, category)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  updateCategory(category: Category) {
    return this.http.put(`${this.categoriesUrl}/${category.id}`, category)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  sortCategories(categories: Category[]): Category[] {
    return categories.sort((a: Category, b: Category) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1;
        }

        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1;
        }

        return 0;
      });
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
