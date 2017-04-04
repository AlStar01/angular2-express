import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from "app/categories/categories.component";
import { CategoryListComponent } from "app/categories/category-list/category-list.component";

const categoryRoutes: Routes = [
    { 
        path: '',
        component: CategoriesComponent,
        children: [
            { path: '', component: CategoryListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(categoryRoutes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule {}