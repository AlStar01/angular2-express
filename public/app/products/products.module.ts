import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { routing } from './products.routing';

import { ProductListComponent } from './product-list.component';

@NgModule({
    imports: [ SharedModule, routing ],
    declarations: [ ProductListComponent ]
})
export class ProductsModule {

}