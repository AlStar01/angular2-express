import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from "@angular/router";

import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  productId: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params
      .map((params: Params) => params['id'])
      .do(id => this.productId = +id)
      .subscribe(id => this.getProduct());
  }

  goBack() {
    this.location.back();
  }

  //////////////////////////////////////

  private getProduct() {
    this.productService.getProduct(this.productId)
      .subscribe(product => this.product = product);
  }
}
