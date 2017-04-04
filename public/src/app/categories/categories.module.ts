import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryListComponent, CategoryDetailComponent]
})
export class CategoriesModule { }
