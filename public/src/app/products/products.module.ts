import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ProductsRoutingModule } from './product-routing.module';

import { ProductService } from "./product.service";

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';

@NgModule({
  imports: [
    SharedModule, 
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent, 
    ProductListComponent, 
    ProductDetailComponent, 
    ProductCardComponent
  ],
  providers: [ProductService]
})
export class ProductsModule { }
