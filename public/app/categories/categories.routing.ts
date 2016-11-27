import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './list/category-list.component';
import { CategoryDetailComponent } from './detail/category-detail.component';
import { CategoryProductsComponent } from './products/category-products.component';
import { CategoryEditComponent } from './edit/category-edit.component';
import { CategoryAddComponent } from './add/category-add.component';
import { CategoryDashboardComponent } from './dashboard/category-dashboard.component';

const routes: Routes = [
    { 
        path: '', 
        component: CategoriesComponent,
        children: [
            { path: ':categoryId/edit', component: CategoryEditComponent },
            { path: ':categoryId', component: CategoryDetailComponent },
            { path: '', component: CategoryListComponent },
        ] 
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);