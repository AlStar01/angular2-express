import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./products.component";
import { ProductListComponent } from "./product-list/product-list.component";

const productRoutes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
            { path: '', component: ProductListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }