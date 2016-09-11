import { NgModule }                 from '@angular/core';
import { SharedModule }             from '../shared/shared.module';

import { routing }                  from './dashboard.routing';

import { DashboardComponent }       from './dashboard.component';

@NgModule({
    imports: [ SharedModule, routing ],
    declarations: [ DashboardComponent ]
})
export class DashboardModule {}