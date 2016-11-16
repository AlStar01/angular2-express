import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Category } from '../category';

import { CategoryService } from '../category.service';

@Component({
    moduleId: module.id,
    templateUrl: 'category-edit.html'
})
export class CategoryEditComponent implements OnInit {
    category: Category;
    errorMessage: string;

    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.getCategory();
    }

    private getCategory() {
        this.route.params.subscribe(
            params => {
                const categoryId: number = params['categoryId'];
                this.categoryService.getCategoryById(categoryId)
                                    .subscribe(
                                        category => this.category = category,
                                        error => this.errorMessage = <any> error
                                    );
            },
            error => this.errorMessage = <any> error
        );
    }
}