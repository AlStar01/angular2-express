import { NgModule }                 from '@angular/core';
import { SharedModule }             from '../shared/shared.module';

import { routing }                  from './dashboard.routing';

import { DashboardComponent }       from './dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
    imports: [ SharedModule, routing ],
    declarations: [ DashboardComponent ],
    providers: [ DashboardService ]
})
export class DashboardModule {}