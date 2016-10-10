import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Product } from '../products/product';
import { Category } from '../categories/category';
import { CategoryService } from './category.service';

import { Observable } from 'rxjs/observable';

@Component({
    templateUrl: 'app/categories/category-products.html'
})
export class CategoryProductsComponent implements OnInit {
    errorMessage: string;
    category: Category;
    products: Product[];

    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params) => {
                const categoryId: number = +params['id'];
                this.categoryService.getProductsByCategory(categoryId)
                                    .subscribe(
                                        response => {
                                            this.category = response.category;
                                            this.products = response.products;
                                        },
                                        error => this.errorMessage = <any> error
                                    )
            },
            error => this.errorMessage = <any> error
        );
    }

    goToDetail(productId: number) {
        this.router.navigate(['/products', productId]);
    }

    goBack() {
        window.history.back();
    }
}