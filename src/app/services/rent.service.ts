import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rent } from '../models/rent';
import { RentUpdateStatusModel } from '../models/rentUpdateStatusModel';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  apiUrl = 'http://localhost:5280/api/rentlist';

  constructor(private httpClient: HttpClient) {}

  getRentList(): Observable<Rent[]> {
    let newPath = this.apiUrl;
    return this.httpClient.get<Rent[]>(newPath);
  }

  update(rentUpdateStatusModel: RentUpdateStatusModel) {
    let newPath = this.apiUrl + '/updateStatus';
    return this.httpClient.post(newPath, rentUpdateStatusModel);
  }

  getListByCategory(categoryId: number): Observable<Rent[]> {
    let newPath = this.apiUrl + '/getlistbycategory?id=' + categoryId;
    return this.httpClient.get<Rent[]>(newPath);
  }
}
