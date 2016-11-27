import { Component } from '@angular/core';

import { Category } from '../category';

import { CategoryService } from '../category.service';

@Component({
    moduleId: module.id,
    templateUrl: 'category-add.html'
})
export class CategoryAddComponent {
    category: Category = new Category(0, '', '');

    constructor(private categoryService: CategoryService) { }

    onSubmitted(category: Category) {

    }

    private _addCategory(category: Category) {
        
    }
}