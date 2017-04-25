import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

import { Subscription } from 'rxjs/Subscription';
import { SearchService } from "../../search/search.service";
import { Observable } from "rxjs/Observable";

import { Product } from "app/products/product";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  query: string;
  isCollapsed = true;
  searching = false;

  private routerSubscription: Subscription;

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit() {
    this.routerSubscription = this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => this.isCollapsed = true);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  submit(term: string) {
    this.searchService.search(term)
      .subscribe(products => console.log(products));
  }

  search = (text$: Observable<string>) => {
    return text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this.searchService.search(term)
            .catch(() => {
              console.log(`Search failed for ${term}`);
              return Observable.of([]);
            }))
      .do(() => this.searching = false);
  }

  formatter = (product: { name: string }) => product.name;

  handleSelect($event: any) {
    this.router.navigate(['products', $event.item.id]);
  }
}
