import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './categories.routing';

import { CategoryDetailComponent } from './detail/category-detail.component';
import { CategoryProductsComponent } from './category-products.component'
import { CategoryService} from './category.service';

@NgModule({
    imports: [ SharedModule, routing ],
    declarations: [ CategoryDetailComponent, CategoryProductsComponent ],
    providers: [ CategoryService ]
})
export class CategoriesModule { }