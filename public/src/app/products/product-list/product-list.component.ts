import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../product.service';

import { Product } from '../product';
import { Pagination } from "app/products/pagination";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  pagination: Pagination;
  total: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.route.queryParams
      .map((queryParams: Params) => queryParams)
      .do(queryParams => {
        if(queryParams['page'] && queryParams['limit']) {
          this.pagination = {
            page: +queryParams['page'],
            limit: +queryParams['limit']
          };
        }
        else {
          this.pagination = {
            page: 1,
            limit: 25
          }
        }
      })
      .subscribe(queryParams => this.getProducts());
  }

  goToNextPage() {
    this.pagination.page += 1;
  }

  private getProducts() {
    this.productService.getProducts(this.pagination)
      .subscribe(products => {
        this.products = products;
        this.setRouteParams();
      });
  }

  private setRouteParams() {
    this.router.navigate([], { queryParams: this.pagination, relativeTo: this.route });
  }
}
