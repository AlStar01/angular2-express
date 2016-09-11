import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component'

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);