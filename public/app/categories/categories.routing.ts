import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CategoryProductsComponent } from './category-products.component';

const routes: Routes = [
    { path: 'categories/:id/products', component: CategoryProductsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);