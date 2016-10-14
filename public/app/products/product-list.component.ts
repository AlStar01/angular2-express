import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

import { Observable } from 'rxjs/observable';

@Component({
    templateUrl: 'app/products/product-list.html'
})
export class ProductListComponent implements OnInit {

    products: Product[];
    filteredProducts: Product[];
    errorMessage: string;

    constructor(
        private productService: ProductService,
        private router: Router) {}

    ngOnInit() { this.getProducts(); }

    private getProducts() {
        this.productService.getProducts()
                            .subscribe(
                                products => {
                                    this.products = products;
                                    this.filteredProducts = products;
                                },
                                error => this.errorMessage = <any>error
                            );
    }

    goToDetail(productId: number) {
        this.router.navigate(['/products', productId]);
    }

    onKey(value: string) {
        this.filteredProducts = this.filter(value);
    }

    onSelect(option: string) {
        this.filteredProducts = this.sort(option.split('_'));
    }

    ////////////////////////////////////////////////////

    private filter(criteria: string): Product[] {
        if(!criteria || criteria.length === 0) return this.products;

        return this.products.filter((product) => {
            return product.name.toLocaleLowerCase().indexOf(criteria.toLocaleLowerCase()) > -1;
        });
    }

    private sort(criteria: any[]): Product[] {
        let [property, reverse] = criteria;
        
        switch(property) {
            case 'name':
                return this.sortByName(reverse);
            case 'price':
                return this.sortByPrice(reverse);
            default:
                return this.products;
        }
    }

    private sortByName(reverse: string): Product[] {
        const sorted: Product[] = this.products.sort((a, b) => {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });

        if(reverse === 'false') return sorted.reverse();
        return sorted;
    }

    private sortByPrice(reverse: string): Product[] {
        return reverse === 'true' ? this.products.sort((a, b) => b.price - a.price) : this.products.sort((a, b) => a.price - b.price);
    }
}