import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { SortOption } from './sort-option';

import { Category } from '../../categories/category';

import { Observable } from 'rxjs/observable';

@Component({
    templateUrl: 'app/products/list/product-list.html'
})
export class ProductListComponent implements OnInit {

    products: Product[];
    filteredProducts: Product[];
    categories: Category[];

    errorMessage: string;

    sortOptions: SortOption[] = [
        { property: '', reverse: false, display: '-- Select option --' },
        { property: 'name', reverse: false, display: 'Name ascending' },
        { property: 'name', reverse: true, display: 'Name descending' },
        { property: 'price', reverse: false, display: 'Price ascending' },
        { property: 'price', reverse: true, display: 'Price descending' }
    ];

    search: string;
    sortOption: SortOption;

    constructor(
        private productService: ProductService,
        private router: Router) {}

    ngOnInit() { 
        this.getProducts();
        this.sortOption = this.sortOptions[0];
    }

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
        this.filteredProducts = this.filterByString(value);
        this.categories = this.getCategories();
    }

    onSelect(option: SortOption) {
        this.filteredProducts = this.sort(option);
    }

    onCategorySelect(categoryId: string) {
        this.filteredProducts = this.filterByCategory(+categoryId);
    }

    resetForm() {
        this.search = '';
        this.filteredProducts = this.products;
        this.categories = this.getCategories();
        this.sortOption = this.sortOptions[0];
    }

    ////////////////////////////////////////////////////

    private filterByString(criteria: string): Product[] {
        if(!criteria || criteria.length === 0) return this.products;

        return this.products.filter((product) => {
            return product.name.toLocaleLowerCase().indexOf(criteria.toLocaleLowerCase()) > -1;
        });
    }

    private filterByCategory(categoryId: number): Product[] {
        if(categoryId === -1) {
            if(this.search && this.search.length > 0) {
                return this.filterByString(this.search);
            }
            else {
                return this.products;
            }
        }
        else {
            return this.filterByString(this.search).filter(product => product.category_id === categoryId);
        }
    }

    private sort(option: SortOption): Product[] {
        
        switch(option.property) {
            case 'name':
                return this.sortByName(option.reverse);
            case 'price':
                return this.sortByPrice(option.reverse);
            default:
                return this.products;
        }
    }

    private sortByName(reverse: boolean): Product[] {
        const sorted: Product[] = this.filteredProducts.sort((a, b) => {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });

        if(reverse) return sorted.reverse();
        return sorted;
    }

    private sortByPrice(reverse: boolean): Product[] {
        return reverse ? this.filteredProducts.sort((a, b) => b.price - a.price) : this.filteredProducts.sort((a, b) => a.price - b.price);
    }

    private getCategories(): Category[] {
        if(this.isFiltered()) return this.mapCategories(this.filteredProducts)
        else return this.mapCategories(this.products);
    }

    private mapCategories(products: Product[]): Category[] {
        return products.map(product => {
            return { category_id: product.category_id, name: product.category };
        });
    }

    ///////////////////////////////////////////

    private isFiltered(): boolean {
        return JSON.stringify(this.filteredProducts) !== JSON.stringify(this.products);
    }
}