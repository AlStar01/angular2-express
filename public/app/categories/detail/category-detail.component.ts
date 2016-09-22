import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
    templateUrl: 'app/categories/detail/category-detail.html'
})
export class CategoryDetailComponent implements OnInit {
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
                const id: number = +params['id'];
                this.categoryService.getCategoryById(id)
                                    .subscribe(
                                        category => this.category = category,
                                        error => this.errorMessage = <any> error
                                    );
            },
            error => this.errorMessage = <any> error
        );
    }

    goBack() {
        window.history.back();
    }
}