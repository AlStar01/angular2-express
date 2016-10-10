import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CategoryDetailComponent } from './detail/category-detail.component';
import { CategoryProductsComponent } from './products/category-products.component';

const routes: Routes = [
    { path: 'categories/:id', component: CategoryDetailComponent },
    { path: 'categories/:id/products', component: CategoryProductsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);