import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CategoryDetailComponent } from './detail/category-detail.component';
import { CategoryProductsComponent } from './products/category-products.component';
import { CategoryEditComponent } from './edit/category-edit.component';
import { CategoryAddComponent } from './add/category-add.component';

const routes: Routes = [
    { path: 'categories/:categoryId', component: CategoryDetailComponent, pathMatch: 'full' },
    { path: 'categories/:categoryId/products', component: CategoryProductsComponent, pathMatch: 'full' },
    { path: 'categories/:categoryId/edit', component: CategoryEditComponent, pathMatch: 'full' },
    { path: 'categories/add', component: CategoryAddComponent, outlet: 'add' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);