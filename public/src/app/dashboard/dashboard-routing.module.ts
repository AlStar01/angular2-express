import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';

const dashboardRoutes: Routes = [
    { path: 'dashboard', component: DashboardSummaryComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
