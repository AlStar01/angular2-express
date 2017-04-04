import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

  getCategories() {
    return this.http.get('')
      .map((res: Response) => res.json());
  }
}
