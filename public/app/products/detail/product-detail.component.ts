import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

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
        private router: Router,
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

    isModified(): boolean {
        return this.product.modified_on > this.product.created_on;
    }

    goToProductsByCategory(categoryId: number) {
        this.router.navigate([`/categories/${categoryId}/products`]);
    }

    goBack() {
        window.history.back();
    }
}