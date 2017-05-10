import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { MdDialog, MdDialogRef } from '@angular/material';

import { CategoryService } from "../category.service";
import { Category } from '../category';
import { CategoryAddComponent } from "../shared/category-add/category-add.component";
import { FilterTextService } from "../../shared/filter-text/filter-text.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  filteredCategories: Category[];
  closeResult: string;

  constructor(
    private router: Router,
    private dialogService: MdDialog,
    private categoryService: CategoryService,
    private filterTextService: FilterTextService) { }

  ngOnInit() {
    this.getCategories();
  }

  openModal() {
    const modalRef: MdDialogRef<CategoryAddComponent> = this.dialogService.open(CategoryAddComponent);

    modalRef.afterClosed().subscribe((category: Category) => {
      if(category.id) {
        this.categories = this.categoryService.sortCategories([...this.categories, category]);
      }
    });
  }

  goToCategoryDetail(categoryId: number) {
    this.router.navigate(['categories', categoryId]);
  }

  filterChanged(term: string) {
    this.filteredCategories = this.filterTextService.filter(term, ['name', 'description'], this.categories);
  }

  ///////////////////////////////////////////

  private getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => {
        this.categories = this.filteredCategories = categories;
      });
  }
}
