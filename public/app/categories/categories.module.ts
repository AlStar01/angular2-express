import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './categories.routing';

import { CategoryListComponent } from './list/category-list.component';
import { CategoryDetailComponent } from './detail/category-detail.component';
import { CategoryOverviewComponent } from './overview/category-overview.component';
import { CategoryProductsComponent } from './products/category-products.component';
import { CategoryEditComponent } from './edit/category-edit.component';
import { CategoryAddComponent } from './add/category-add.component';

import { CategoryCardComponent } from './card/category-card.component';
import { CategoryFormComponent } from './form/category-form.component';

import { CategoryService} from './category.service';

@NgModule({
    imports:      [ SharedModule, 
                    routing ],
    declarations: [ CategoryListComponent,
                    CategoryDetailComponent, 
                    CategoryOverviewComponent,
                    CategoryProductsComponent,
                    CategoryEditComponent,
                    CategoryAddComponent,
                    CategoryFormComponent,
                    CategoryCardComponent ],
    providers:    [ CategoryService ]
})
export class CategoriesModule { }