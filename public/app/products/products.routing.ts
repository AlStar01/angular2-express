import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './detail/product-detail.component';

const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:productId', component: ProductDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);