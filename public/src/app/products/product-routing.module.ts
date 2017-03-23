import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from "./products.component";

import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const productRoutes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
            { path: '', component: ProductListComponent },
            { path: ':id', component: ProductDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }