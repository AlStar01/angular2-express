import { Component, OnInit } from '@angular/core';

import { MdDialogRef } from "@angular/material";

import { Category } from "../../category";
import { CategoryService } from "../../category.service";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  constructor(
    private categoryService: CategoryService,
    private dialogRef: MdDialogRef<CategoryAddComponent>) { }

  onSubmit(category: Category) {
    this.categoryService.addCategory(category).subscribe(category => this.dialogRef.close(category));
  }

  onCancel() {
    this.dialogRef.close();
  }
}
