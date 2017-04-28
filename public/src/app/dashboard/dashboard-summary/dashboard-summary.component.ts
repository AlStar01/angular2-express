import { Component, OnInit } from '@angular/core';

import { DashboardService } from "../dashboard.service";

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {
  productsByColor: any[];
  productsByCategory: any[];

  // productsByColor chart
  productsByColorChartLabels: string[];
  productsByColorChartData: any[];
  productsByColorChartType = 'bar';
  productsByColorChartLegend = true;
  productsByColorChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: Number.MIN_VALUE,
          max: Number.MAX_VALUE
        }
      }]
    }
  };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getDashboardData();
  }

  productsByColorChartHovered($event: any) {
    console.debug($event);
  }

  productsByColorChartClicked($event: any) {
    console.debug($event)
  }

  ////////////////////////////////

  private getDashboardData() {
    this.dashboardService.getDashboardData()
      .subscribe(data => {
        this.productsByColor = data.productsByColor;
        this.productsByCategory = data.productsByCategory;

        this.prepareProductsByColorChart();
      });
  }

  private prepareProductsByColorChart() {
    this.productsByColorChartLabels = [];

    this.productsByColorChartLabels = this.productsByColor.map(e => e.color);

    const productsbyColorQuantities = this.productsByColor.map(e => e.quantity);
    const min = Math.min(...productsbyColorQuantities);
    const max = Math.max(...productsbyColorQuantities);

    console.log(this.productsByColorChartOptions);

    this.productsByColorChartOptions.scales.yAxes[0].ticks.min = min - 15;
    this.productsByColorChartOptions.scales.yAxes[0].ticks.max = max + 5;

    this.productsByColorChartData = [];
    this.productsByColorChartData[0] = { data:  productsbyColorQuantities, label: 'Colors' };
  }
}
