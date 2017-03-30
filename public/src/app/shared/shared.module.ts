import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SelectOnFocusDirective } from './directives/select-on-focus.directive';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule,
    SelectOnFocusDirective,
    TruncatePipe
  ],
  declarations: [
    SelectOnFocusDirective, 
    TruncatePipe
  ]
})
export class SharedModule { }
