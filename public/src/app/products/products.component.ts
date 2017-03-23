import { Component } from '@angular/core';

import { ProductService } from "./product.service";

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [ProductService]
})
export class ProductsComponent { }
