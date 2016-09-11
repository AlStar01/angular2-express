import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';

@Component({
    templateUrl: 'app/dashboard/dashboard.html'
})
export class DashboardComponent implements OnInit {
    errorMessage: string;

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.getDashboard();
    }

    private getDashboard() {
        this.dashboardService.getDashboard()
            .subscribe(
                dashboard => console.log(dashboard),
                error => this.errorMessage = <any>error
            );
    }
}