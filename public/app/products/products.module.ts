import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './products.routing';

import { ProductListComponent } from './product-list.component';
import { CategoryProductsComponent } from './categories/category-products.component';
import { ProductService } from './product.service';

@NgModule({
    imports: [ SharedModule, routing ],
    declarations: [ ProductListComponent, CategoryProductsComponent ],
    providers: [ ProductService ]
})
export class ProductsModule {

}