import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Category } from "app/categories/category";
import { CategoryService } from "app/categories/category.service";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  constructor(private activeModal: NgbActiveModal) { }

  onSubmit(category: Category) {
    console.log(category);
  }

  onCancel(message: string) {
    this.activeModal.dismiss(message);
    console.log(message);
  }
}
