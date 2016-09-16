import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../product'
import { ProductService } from '../product.service';

@Component({
    templateUrl: 'app/products/detail/product-detail.html'
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    errorMessage: string;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.getProduct();
    }

    private getProduct() {
        this.route.params.subscribe(
            (params: Params) => {
                const productId: number = +params['productId'];
                this.productService.getProduct(productId)
                                    .subscribe(
                                        product => this.product = product,
                                        error => this.errorMessage = <any> error
                                    );
            },
            error => this.errorMessage = <any> error
        );
    }

    goBack() {
        window.history.back();
    }
}