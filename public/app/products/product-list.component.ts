import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

import { Observable } from 'rxjs/observable';

@Component({
    templateUrl: 'app/products/product-list.html'
})
export class ProductListComponent implements OnInit {

    products: Product[];
    filteredProducts: Product[];
    errorMessage: string;

    constructor(
        private productService: ProductService,
        private router: Router) {}

    ngOnInit() { this.getProducts(); }

    private getProducts() {
        this.productService.getProducts()
                            .subscribe(
                                products => {
                                    this.products = products;
                                    this.filteredProducts = products;
                                },
                                error => this.errorMessage = <any>error
                            );
    }

    goToDetail(productId: number) {
        this.router.navigate(['/products', productId]);
    }

    onKey(value: string) {
        this.filteredProducts = this.products.filter((product) => {
            product.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
        });
    }
}