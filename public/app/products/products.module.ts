import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './products.routing';

import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';

@NgModule({
    imports: [ SharedModule, routing ],
    declarations: [ ProductListComponent ],
    providers: [ ProductService ]
})
export class ProductsModule {

}