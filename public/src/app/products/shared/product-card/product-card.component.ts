import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../product';

import * as toHex from 'colornames';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  colorHex: string;

  constructor(private router: Router) {}

  ngOnInit() {
    let colorName = this.product.color.replace(/\s/g, '');
    this.colorHex = toHex(colorName);
  }

  goToProduct() {
    this.router.navigate(['/products', this.product.id]);
  }


}
