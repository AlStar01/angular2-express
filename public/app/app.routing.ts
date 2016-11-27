import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/dashboard', 
        pathMatch: 'full' 
    },
    { 
        path: 'categories', 
        loadChildren: 'app/categories/categories.module#CategoriesModule' 
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);