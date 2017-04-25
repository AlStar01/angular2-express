import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from "./products.component";

import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductAddComponent } from "app/products/product-add/product-add.component";
import { ProductEditComponent } from "app/products/product-edit/product-edit.component";

const productRoutes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
            { path: '', component: ProductListComponent },
            { path: ':id', component: ProductDetailComponent },
            { path: ':id/edit', component: ProductEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }