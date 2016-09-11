import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

    constructor(private http: Http) { }

    private dashboardUrl: string = 'api/dashboard';

    getDashboard(): Observable<any> {
        return this.http.get(this.dashboardUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    /////////////////////////////////////////////

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: any) {
        const errMsg: string = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}