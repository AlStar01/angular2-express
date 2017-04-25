import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Category } from "app/categories/category";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  @Input() category: Category;

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() submit: EventEmitter<Category> = new EventEmitter();

  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    if(this.category) {
      this.categoryForm.setValue({
        name: this.category.name || '',
        description: this.category.description || ''
      });
    }
  }

  canSubmit() {
    return this.categoryForm.status === 'VALID';
  }

  onCancel() {
    this.cancel.emit("Cancelled adding new category");
  }

  onSubmit() {
    const formValue = this.categoryForm.value;
    this.submit.emit(formValue);
  }

  private createForm() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
