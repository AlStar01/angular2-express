import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Category } from "app/categories/category";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  constructor(public activeModal: NgbActiveModal) { }

  onSubmit(category: Category) {
    console.log(category);
  }
}
