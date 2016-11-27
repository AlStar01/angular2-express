import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
    moduleId: module.id,
    templateUrl: 'category-overview.html'
})
export class CategoryOverviewComponent implements OnInit {
    category: Category;
    errorMessage: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private categoryService: CategoryService
    ) { }

    ngOnInit() {
        this._getCategory();
    }

    private _getCategory() {
        this.route.params.subscribe(params => {
            this.categoryService.getCategoryById(+params['categoryId']).subscribe(
                category => this.category = category,
                error => this.errorMessage = <any> error
            );
        });
    }
}