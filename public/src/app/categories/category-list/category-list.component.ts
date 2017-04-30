import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
    private modalService: NgbModal, 
    private categoryService: CategoryService,
    private filterTextService: FilterTextService) {}

  ngOnInit() {
    this.getCategories();
  }

  openModal() {
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

  filterChanged(term: string) {
    this.filteredCategories = this.filterTextService.filter(term, ['name', 'description'], this.categories);
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
      .subscribe(categories => {
        this.categories = this.filteredCategories = categories;
      });
  }
}
