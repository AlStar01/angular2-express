import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Category } from "app/categories/category";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  @Input() category: Category;
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.categoryForm.setValue({
      name: this.category.name || '',
      description: this.category.description || ''
    });
  }

  canSubmit() {
    return this.categoryForm.status === 'VALID';
  }

  onSubmit() {
    const formValue = this.categoryForm.value;
  }

  private createForm() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
