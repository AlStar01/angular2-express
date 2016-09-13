import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

import { Observable } from 'rxjs/observable';

@Component({
    templateUrl: 'app/products/categories/category-products.html'
})
export class CategoryProductsComponent implements OnInit {
    errorMessage: string;
    products: Product[];

    constructor(
        private productService: ProductService, 
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params) => {
                const categoryId: number = +params['id'];
                this.productService.getProductsByCategory(categoryId)
                                    .subscribe(
                                        products => this.products = products,
                                        error => this.errorMessage = <any> error
                                    )
            },
            error => this.errorMessage = <any> error
        );
    }
}