import { Component, OnInit } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html'
})
export class AppComponent implements OnInit {
    isCollapsed: boolean = true;

    constructor(private router: Router) { }

    ngOnInit() {
        // this.router.events
        //     .filter(event => event instanceof NavigationStart)
        //     .subscribe(this.collapseNav);
    }

    private collapseNav(): void {
        this.isCollapsed = true;
    }
}
