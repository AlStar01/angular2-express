import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from "./product.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ProductService]
})
export class ProductsModule { }
