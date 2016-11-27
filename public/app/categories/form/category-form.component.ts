import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { NgForm, FormControl } from '@angular/forms'

import { Category } from '../category';

@Component({
    moduleId: module.id,
    selector: 'category-form',
    templateUrl: 'category-form.html'
})
export class CategoryFormComponent {
    _category: Category = new Category(0, '', '');
    
    @Output() onSubmitted = new EventEmitter<Category>();

    @Input()
    set category(category: Category) {
        this._category = category || new Category(0, '', '');
    }

    get category() { return this._category; }

    @ViewChild('categoryEditForm') categoryEditForm: NgForm;

    constructor() {}

    hasError(formControl: FormControl): boolean {
        return formControl.invalid && formControl.touched;
    }

    submit() {
        this.onSubmitted.emit(this.category);
    }

    goBack() {
        window.history.back();
    }
}