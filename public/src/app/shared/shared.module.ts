import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { 
  MdListModule, 
  MdButtonModule, 
  MdProgressSpinnerModule, 
  MdProgressBarModule } from '@angular/material';

import { SelectOnFocusDirective } from './directives/select-on-focus.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterTextModule } from "./filter-text/filter-text.module";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdListModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    NgbModule,
    SelectOnFocusDirective,
    TruncatePipe,
    FilterTextModule
  ],
  declarations: [
    SelectOnFocusDirective,
    TruncatePipe
  ]
})
export class SharedModule { }
