import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MdListModule, MdButtonModule, MdProgressSpinnerModule, MdProgressBarModule } from '@angular/material';

import { SelectOnFocusDirective } from './directives/select-on-focus.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterTextComponent } from "./filter-text/filter-text.component";
import { FilterTextService } from "./filter-text/filter-text.service";

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
    FilterTextComponent
  ],
  declarations: [
    SelectOnFocusDirective, 
    TruncatePipe
  ],
  providers: [FilterTextService]
})
export class SharedModule { }
