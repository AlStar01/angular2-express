import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './products.routing';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductService } from './product.service';

@NgModule({
    imports: [ SharedModule, routing ],
    declarations: [ ProductListComponent, ProductDetailComponent ],
    providers: [ ProductService ]
})
export class ProductsModule {

}