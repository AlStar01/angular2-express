import { NgModule } from '@angular/core';

import { SharedModule } from "app/shared/shared.module";

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryRoutingModule } from "app/categories/category-routing.module";
import { CategoriesComponent } from "app/categories/categories.component";
import { CategoryFormComponent } from './shared/category-form/category-form.component';
import { CategoryAddComponent } from './shared/category-add/category-add.component';

import { CategoryService } from "app/categories/category.service";
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutingModule
  ],
  declarations: [
    CategoriesComponent,
    CategoryListComponent, 
    CategoryDetailComponent,
    CategoryAddComponent, 
    CategoryFormComponent, CategoryEditComponent
  ],
  providers: [CategoryService],
  entryComponents: [CategoryAddComponent]
})
export class CategoriesModule { }
