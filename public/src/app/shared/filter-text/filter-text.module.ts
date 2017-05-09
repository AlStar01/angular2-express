import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MdInputModule } from '@angular/material';

import { FilterTextComponent } from "./filter-text.component";
import { FilterTextService } from './filter-text.service';

@NgModule({
  imports: [CommonModule, FormsModule, MdInputModule],
  exports: [FilterTextComponent],
  declarations: [FilterTextComponent],
  providers: [FilterTextService]
})
export class FilterTextModule { }
