import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { CategoryService } from "../category.service";
import { Category } from '../category';
import { CategoryAddComponent } from "../shared/category-add/category-add.component";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  closeResult: string;

  constructor(
    private router: Router,
    private modalService: NgbModal, 
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  openModal(content) {
    const modalRef = 
      this.modalService.open(CategoryAddComponent).result
        .then(category => {
          this.categories = 
            [...this.categories, category]
            .sort((a: Category, b: Category) => {
              if(a.name.toUpperCase() < b.name.toUpperCase()) {
                return -1;
              }

              if(a.name.toUpperCase() > b.name.toUpperCase()) {
                return 1;
              }

              return 0;
            });
        })
        .catch(reason => console.log(reason));
  }

  goToCategoryDetail(categoryId: number) {
    this.router.navigate(['categories', categoryId]);
  }

  /////////////////////////////////////////

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ///////////////////////////////////////////

  private getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
