import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

import { Category } from '../categories/category';

import { Observable } from 'rxjs/observable';

@Component({
    templateUrl: 'app/products/product-list.html'
})
export class ProductListComponent implements OnInit {

    products: Product[];
    filteredProducts: Product[];
    categories: Category[];

    errorMessage: string;

    search: string;

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
                                    this.categories = this.getCategories();
                                },
                                error => this.errorMessage = <any>error
                            );
    }

    goToDetail(productId: number) {
        this.router.navigate(['/products', productId]);
    }

    onKey(value: string) {
        this.filteredProducts = this.filter(value);
        this.categories = this.getCategories();
    }

    onSelect(option: string) {
        this.filteredProducts = this.sort(option.split('_'));
    }

    onCategorySelect(categoryId: string) {
        console.log(+categoryId);
    }

    resetForm() {
        this.search = '';
        this.filteredProducts = this.products;
        this.categories = this.getCategories();
    }

    ////////////////////////////////////////////////////

    private filter(criteria: string): Product[] {
        if(!criteria || criteria.length === 0) return this.products;

        return this.products.filter((product) => {
            return product.name.toLocaleLowerCase().indexOf(criteria.toLocaleLowerCase()) > -1;
        });
    }

    private filterByCategory(categoryId: number) {
        // TODO - implement
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

    private getCategories(): Category[] {
        if(this.hasChanged()) return this.mapCategories(this.filteredProducts)
        else return this.mapCategories(this.products);
    }

    private mapCategories(products: Product[]): Category[] {
             return products.map(product => {
                return { category_id: product.category_id, name: product.category };
            })
    }

    ///////////////////////////////////////////

    private hasChanged(): boolean {
        return JSON.stringify(this.filteredProducts) !== JSON.stringify(this.products);
    }
}