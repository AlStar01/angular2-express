import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOnFocusDirective } from './directives/select-on-focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SelectOnFocusDirective
  ],
  declarations: [SelectOnFocusDirective]
})
export class SharedModule { }
