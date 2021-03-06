import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import './rxjs-extensions';

import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { DashboardModule } from './dashboard/dashboard.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    SharedModule,
    NgbModule.forRoot(),
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
