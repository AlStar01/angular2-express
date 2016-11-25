import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Product } from '../../product';

@Component({
    moduleId: module.id,
    selector: 'product-card',
    templateUrl: 'product-card.html'
})
export class ProductCardComponent implements OnInit {
    @Input() product: Product;

    constructor(private router: Router) {}

    ngOnInit() {}

     goToDetail(productId: number) {
        this.router.navigate(['/products', productId]);
    }
}