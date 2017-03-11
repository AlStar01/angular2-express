import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import './rxjs-extensions';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
