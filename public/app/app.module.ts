import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routing';

import { DashboardModule } from './dashboard/dashboard.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  imports: [  BrowserModule, 
              CoreModule, 
              SharedModule,
              DashboardModule,
              ProductsModule,
              routing ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
