import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';

@Component({
    templateUrl: 'app/dashboard/dashboard.html'
})
export class DashboardComponent implements OnInit {
    errorMessage: string;

    productsByModel: any[];
    productsByCategory: any[];
    recentActivities: any[];

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.getDashboard();
    }

    private getDashboard() {
        this.dashboardService.getDashboard()
            .subscribe(
                (dashboard) => {
                    this.productsByModel = dashboard.productsByModel;
                    this.productsByCategory = dashboard.productsByCategory;
                    this.recentActivities = dashboard.recentActivities;
                },
                error => this.errorMessage = <any>error
            );
    }
}