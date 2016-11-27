import { Component, OnInit } from '@angular/core';

import { Category } from '../category';

import { CategoryService } from '../category.service';

import { Observable } from 'rxjs';

@Component({
    moduleId: module.id,
    templateUrl: 'category-list.html'
})
export class CategoryListComponent implements OnInit {
    categories: Category[];
    errorMessage: string;
    
    constructor(private categoryService: CategoryService) { }

    ngOnInit() {
        this._getCategories();
    }

    private _getCategories() {
        this.categoryService.getCategories().subscribe(
            categories => this.categories = categories,
            error => this.errorMessage = <any> error
        );
    }
}