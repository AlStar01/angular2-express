import { Component } from '@angular/core';
import { CategoryService } from "app/categories/category.service";

@Component({
    template: '<router-outlet></router-outlet>',
    providers: [CategoryService]
})
export class CategoriesComponent {}