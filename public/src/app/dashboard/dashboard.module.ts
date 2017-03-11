import { NgModule } from '@angular/core';

import { DashboardService } from "./dashboard.service";

import { DashboardComponent } from './dashboard.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardSummaryComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
