import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { CategoryService } from "../category.service";
import { Category } from "../category";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  private categoryId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params
      .map((params: Params) => params['id'])
      .do(categoryId => this.categoryId = +categoryId)
      .subscribe(id => this.getCategory());
  }

  onSubmit(category: Category) {
    this.categoryService.updateCategory(category)
      .subscribe(category => this.goToDetail());
  }

  onCancel() {
    this.goToDetail();
  }

  ///////////////////////////////////////

  private getCategory() {
    this.categoryService.getCategory(this.categoryId)
      .subscribe(category => this.category = category);
  }

  private goToDetail() {
    this.router.navigate(['categories', this.category.id]);
  }
}
