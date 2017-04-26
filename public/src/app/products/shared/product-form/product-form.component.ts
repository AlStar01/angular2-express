import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product } from "../../product";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  
  private productForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.productForm = this.fb.group({
      name: [ '', Validators.required ],
      description: [ '', Validators.required ],
      price: [ '', Validators.required ],
      color: [ '', Validators.required ],
      material: [ '', Validators.required ],
      origin: [ '', Validators.required ],
      manufacturer: [ '', Validators.required ],
      featured_image: [ '', Validators.required ],
      category_id: [ '', Validators.required ],

    });
  }
}
