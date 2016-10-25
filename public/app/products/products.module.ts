import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './products.routing';

import { ProductListComponent } from './list/product-list.component';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductAddComponent } from './add/product-add.component';

import { ProductService } from './product.service';
import { CategoryService } from '../categories/category.service';

@NgModule({
    imports:        [ SharedModule, 
                      routing ],
    declarations:   [ ProductListComponent, 
                      ProductDetailComponent,
                      ProductAddComponent ],
    providers:      [ ProductService,
                      CategoryService ]
})
export class ProductsModule {

}