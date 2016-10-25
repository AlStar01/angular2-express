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
                        .map((res: Response) => res.json() as Product[])
                        .catch(this.handleError);
    }

    getProduct(productId: number): Observable<Product> {
        return this.http.get(`${this.productsUrl}/${productId}`)
                        .map((res: Response) => res.json() as Product)
                        .catch(this.handleError);
    }

    addProduct(product: Product, quantity: number): Observable<any> {
        return this.http.post(`${this.productsUrl}`, { product, quantity })
                        .map((res: Response) => res.ok)
                        .catch(this.handleError);
    }

    //////////////////////////////////////////////

    private handleError(error: any) {
        const errMsg: string = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}