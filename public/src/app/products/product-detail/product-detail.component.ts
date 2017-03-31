import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../product.service';

import { Product } from '../product';

import * as toHex from 'colornames';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private id: number;
  product: Product;
  colorHex: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location, 
    private productService: ProductService) { }

  ngOnInit() {
    this.route.params
      .map((params: Params) => params['id'])
      .do(id => this.id = +id)
      .subscribe(id => this.getProduct());
  }

  getProduct() {
    this.productService.getProduct(this.id)
      .subscribe(product => {
        this.product = product;
        this.setColorHex();
      });
  }

  goBack() {
    this.location.back();
  }

  private setColorHex() {
    let colorName = this.product.color.replace(/\s/gi, '');
    this.colorHex = toHex(colorName);
  }
}
