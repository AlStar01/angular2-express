import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

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
    categories: Category[];
    
    constructor(
        private productService: ProductService,
        private categoryService: CategoryService
    ) { }

    ngOnInit() { }

    hasError(formControl: FormControl): boolean {
        return formControl.invalid && formControl.touched;
    }

    onSubmit() {
        console.log(this.product);
    }

    goBack() {
        window.history.back();
    }
}