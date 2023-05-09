import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rent } from '../models/rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiUrl = 'http://localhost:5280/api/rentlist';

  constructor(private httpClient:HttpClient) { }

  getRentList():Observable<Rent[]> {
    let newPath = this.apiUrl;
   return this.httpClient.get<Rent[]>(newPath);
  }
}
