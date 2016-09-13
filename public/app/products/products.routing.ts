import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { CategoryProductsComponent } from './categories/category-products.component';

const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/categories/:id', component: CategoryProductsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);