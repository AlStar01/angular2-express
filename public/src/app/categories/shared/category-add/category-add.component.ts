import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {

  constructor(public activeModal: NgbActiveModal) { }
}
