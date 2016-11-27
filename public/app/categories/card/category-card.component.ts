import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Category } from '../category';

@Component({
    moduleId: module.id,
    selector: 'category-card',
    templateUrl: 'category-card.html'
})
export class CategoryCardComponent {
    @Input() category: Category;
    
    constructor(private router: Router) { }

    goToDetail(categoryId: number) {
        this.router.navigate([categoryId])
    }
}