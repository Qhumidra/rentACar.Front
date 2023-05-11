import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { RentCategory } from '../models/rentCategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'http://localhost:5280/api/categories/';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiUrl + "carCategories");
  }

  getRentCategories(): Observable<RentCategory[]> {
    return this.httpClient.get<RentCategory[]>(this.apiUrl + "rentCategories");
  }
}
