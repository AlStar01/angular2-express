import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Category } from '../category';
import { CategoryService } from "../category.service";

import { Product } from "../../products/product";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  
})
export class CategoryDetailComponent implements OnInit {
  private categoryId: number;
  
  category: Category;
  products: Product[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params
      .map((params: Params) => params['id'])
      .do(id => this.categoryId = id)
      .subscribe(id => this.getCategory());
  }

  goToCategories() {
    this.router.navigate(['categories']);
  }

  /////////////////////////////////

  private getCategory() {
    this.categoryService.getCategory(this.categoryId)
      .subscribe(data => {
        this.category = data.category;
        this.products = data.products;
      });
  }
}
