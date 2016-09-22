import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';

import { Product } from '../products/product';

import { Category } from './category';

@Injectable()
export class CategoryService {

    categoriesUrl: string = 'api/categories'

    constructor(private http: Http) { }

    getCategoryById(categoryId: number): Observable<Category> {
        return this.http.get(`${this.categoriesUrl}/${categoryId}`)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getProductsByCategory(categoryId: number): Observable<Product[]> {
        return this.http.get(`${this.categoriesUrl}/${categoryId}/products`)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: any) {
        const errMsg: string = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}