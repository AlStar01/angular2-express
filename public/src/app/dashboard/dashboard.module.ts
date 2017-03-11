import { NgModule } from '@angular/core';
import { DashboardService } from "./dashboard.service";
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule
  ],
  declarations: [
    DashboardSummaryComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
