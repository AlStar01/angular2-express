import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './list/product-list.component';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductAddComponent } from './add/product-add.component';

const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/add', component: ProductAddComponent },
    { path: 'products/:productId', component: ProductDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);