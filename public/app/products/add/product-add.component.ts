import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl, NgForm } from '@angular/forms';

import { Product } from '../product';
import { ProductService } from '../product.service';

import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';

import { Tag } from '../../tags/tag'; 

@Component({
    templateUrl: 'app/products/add/product-add.html'
})
export class ProductAddComponent implements OnInit {
    errorMessage: string;

    @ViewChild('productAddForm') productAddForm: NgForm;

    tagsInput: string = '';
    
    product: Product = new Product(undefined, undefined, undefined, undefined, undefined, -1);
    quantity: number = 1;
    categories: Category[] = [];
    tags: Tag[] = [];
    
    constructor(
        private productService: ProductService,
        private categoryService: CategoryService
    ) { }

    ngOnInit() { this.getCategories(); }

    hasError(formControl: FormControl): boolean {
        return formControl.invalid && formControl.touched;
    }

    onSubmit() {
        this.productService.addProduct(this.product, this.quantity)
                           .subscribe(
                               response => console.log(response),
                               error => this.errorMessage = <any> error
                            );
    }

    goBack() {
        window.history.back();
    }

    addTags(tagsControl: HTMLInputElement) {
        this.tags.push(...this.getTags(tagsControl.value));
        this.resetTagsControl(tagsControl);
    }

    removeTag(index: number) {
        this.tags.splice(index, 1);
    }

    /////////////////////////////////////

    private getCategories() {
        this.categoryService.getCategories()
                            .subscribe(
                                categories => this.categories = categories,
                                error => this.errorMessage = <any> error
                            );
    }

    private resetForm() {
        this.product = new Product(undefined, undefined, undefined, undefined, undefined, -1);
        this.tags = [];
    }

    private resetTagsControl(tagsControl: HTMLInputElement) {
        return tagsControl.value = '';
    }

    private isValidTag(name: string, tags: Tag[]): boolean {
        if(name && name.trim().length > 0) {
            return tags.every(tag => tag.name !== name);
        }
        return false;
    }

    private getTags(value: string): Tag[] {
        return value.split(',')
                    .filter(name => this.isValidTag(name, this.tags))
                    .map(name => { 
                        return { name } 
                    });
    }
}