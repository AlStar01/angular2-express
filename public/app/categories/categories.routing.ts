import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './list/category-list.component';
import { CategoryDetailComponent } from './detail/category-detail.component';
import { CategoryOverviewComponent } from './overview/category-overview.component';
import { CategoryProductsComponent } from './products/category-products.component';
import { CategoryEditComponent } from './edit/category-edit.component';
import { CategoryAddComponent } from './add/category-add.component';

const routes: Routes = [
    { 
        path: 'category-list', 
        component: CategoryListComponent 
    },
    { 
        path: 'category-details/:categoryId', 
        component: CategoryDetailComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: CategoryOverviewComponent },
            { path: 'edit', component: CategoryEditComponent },
            { path: 'add', component: CategoryAddComponent }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);