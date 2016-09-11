import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <nav>
            <a routerLink="dashboard" routerLinkActive="active">Dashboard</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }
