import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";

@Injectable()
export class DashboardService {
  private dashboardUrl = 'api/dashboard';

  constructor(private http: Http) { }

  getDashboardData(): Observable<{ productsByColor: any[], productsByCategory: any[]}> {
    return this.http.get(this.dashboardUrl)
      .map(data => data.json())
      .catch(this.handleError);
  }

  ///////////////////////////////////////////////

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
