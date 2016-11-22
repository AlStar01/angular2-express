import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm, FormControl } from '@angular/forms'

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

    @ViewChild('categoryEditForm') categoryEditForm: NgForm;

    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this._getCategory();
    }

    hasError(formControl: FormControl): boolean {
        return formControl.invalid && formControl.touched;
    }

    goBack() {
        window.history.back();
    }

    save() {
        this.categoryService
            .updateCategory(this.category)
            .subscribe(
                result => this.router.navigate(['/categories', this.category.categoryId]),
                error => this.errorMessage = <any> error
            );
    }

    private _getCategory() {
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