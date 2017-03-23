import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ProductsRoutingModule } from './product-routing.module';

import { ProductService } from "./product.service";

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    SharedModule, 
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent, 
    ProductListComponent
  ],
  providers: [ProductService]
})
export class ProductsModule { }
