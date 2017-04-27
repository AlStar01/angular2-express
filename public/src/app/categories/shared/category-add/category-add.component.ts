import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
    public activeModal: NgbActiveModal) { }

  onSubmit(category: Category) {
    this.categoryService.addCategory(category).subscribe(category => this.activeModal.close(category));
  }

  onCancel(reason: string) {
    this.activeModal.dismiss(reason);
  }
}
