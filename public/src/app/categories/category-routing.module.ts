import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from "app/categories/categories.component";
import { CategoryListComponent } from "app/categories/category-list/category-list.component";
import { CategoryDetailComponent } from "app/categories/category-detail/category-detail.component";

const categoryRoutes: Routes = [
    { 
        path: '',
        component: CategoriesComponent,
        children: [
            { path: '', component: CategoryListComponent },
            { path: ':id', component: CategoryDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(categoryRoutes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule {}