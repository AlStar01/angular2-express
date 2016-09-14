import { Injectable} from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable} from 'rxjs/observable';

import { Product } from './product';

@Injectable()
export class ProductService {

    private productsUrl: string = '/api/products';

    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productsUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    //////////////////////////////////////////////

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