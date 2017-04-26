import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService, 
    private location: Location) { }

  ngOnInit() {

  }

  goBack() {
    this.location.back();
  }
}
