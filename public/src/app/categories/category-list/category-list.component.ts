import { Component, OnInit } from '@angular/core';

import { CategoryService } from "app/categories/category.service";
import { Category } from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  ///////////////////////////////////////////

  private getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
