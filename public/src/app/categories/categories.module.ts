import { NgModule } from '@angular/core';

import { SharedModule } from "app/shared/shared.module";

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryRoutingModule } from "app/categories/category-routing.module";
import { CategoriesComponent } from "app/categories/categories.component";

import { CategoryService } from "app/categories/category.service";

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutingModule
  ],
  declarations: [
    CategoriesComponent,
    CategoryListComponent, 
    CategoryDetailComponent
  ],
  providers: [CategoryService]
})
export class CategoriesModule { }
