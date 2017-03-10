import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SelectOnFocusDirective } from './directives/select-on-focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SelectOnFocusDirective
  ],
  declarations: [SelectOnFocusDirective]
})
export class SharedModule { }
