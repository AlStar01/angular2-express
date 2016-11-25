import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './products.routing';

import { ProductListComponent } from './list/product-list.component';
import { ProductCardComponent } from './list/product-card/product-card.component'
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductAddComponent } from './add/product-add.component';

import { ProductService } from './product.service';
import { CategoryService } from '../categories/category.service';

@NgModule({
    imports:        [ SharedModule, 
                      routing ],
    declarations:   [ ProductListComponent,
                      ProductCardComponent, 
                      ProductDetailComponent,
                      ProductAddComponent ],
    providers:      [ ProductService,
                      CategoryService ]
})
export class ProductsModule {

}