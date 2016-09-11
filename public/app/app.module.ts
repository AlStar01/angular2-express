import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, DashboardModule, CoreModule, routing ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
