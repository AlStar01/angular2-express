import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";

import { Product } from './product';
import { Pagination } from "app/products/pagination";

@Injectable()
export class ProductService {
  private productsUrl = 'api/products';

  constructor(private http: Http) { }

  getProducts(pagination: Pagination): Observable<Product[]> {
    return this.http.get(`${this.productsUrl}?page=${pagination.page}&limit=${pagination.limit}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get(`${this.productsUrl}/${id}`)
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
