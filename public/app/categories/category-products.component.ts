import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../products/product';
import { CategoryService } from './category.service';

import { Observable } from 'rxjs/observable';

@Component({
    templateUrl: 'app/products/categories/category-products.html'
})
export class CategoryProductsComponent implements OnInit {
    errorMessage: string;
    products: Product[];

    constructor(
        private categoryService: CategoryService, 
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params) => {
                const categoryId: number = +params['id'];
                this.categoryService.getProductsByCategory(categoryId)
                                    .subscribe(
                                        products => this.products = products,
                                        error => this.errorMessage = <any> error
                                    )
            },
            error => this.errorMessage = <any> error
        );
    }
}