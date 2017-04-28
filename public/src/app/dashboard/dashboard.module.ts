import { NgModule } from '@angular/core';

import { SharedModule } from "app/shared/shared.module";

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardService } from "./dashboard.service";

import { DashboardComponent } from './dashboard.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    DashboardSummaryComponent
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
