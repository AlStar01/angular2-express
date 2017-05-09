import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { FlexLayoutModule } from '@angular/flex-layout';

import { MdInputModule, MdButtonModule, MdIconModule } from '@angular/material';

import { FilterTextComponent } from "./filter-text.component";
import { FilterTextService } from './filter-text.service';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    FlexLayoutModule, 
    MdInputModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [FilterTextComponent],
  declarations: [FilterTextComponent],
  providers: [FilterTextService]
})
export class FilterTextModule { }
