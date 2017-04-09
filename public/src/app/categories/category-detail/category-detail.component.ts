import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { CategoryService } from "app/categories/category.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  private category: Category;
  private categoryId: number;

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
      .subscribe(category => this.category = category);
  }
}
