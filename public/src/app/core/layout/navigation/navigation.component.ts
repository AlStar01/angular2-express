import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

import { Subscription } from 'rxjs/Subscription';
import { SearchService } from "app/core/search/search.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isCollapsed = true;

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

  submit(value: string) {
    this.searchService.search(value)
      .subscribe(products => console.log(products));
  }
}
