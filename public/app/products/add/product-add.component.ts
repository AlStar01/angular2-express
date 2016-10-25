import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';

@Component({
    templateUrl: 'app/products/add/product-add.html'
})
export class ProductAddComponent implements OnInit {
    product: Product = new Product(undefined, undefined, undefined, undefined, undefined, undefined);
    quantity: number = 1;
    
    constructor(
        private productService: ProductService,
        private categoryService: CategoryService
    ) { }

    ngOnInit() {
        
    }

    onSubmit() {
        console.log(this.product);
    }

    goBack() {
        window.history.back();
    }
}