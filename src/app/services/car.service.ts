import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'http://localhost:5280/api/cars';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<Car[]> {
    let newPath = this.apiUrl + "/getlist"
   return this.httpClient.get<Car[]>(newPath);
  }
  
  getCarsByCategory(categoryId:number):Observable<Car[]>{
    let newPath = this.apiUrl + "/getbycategory?id="+categoryId
    return this.httpClient.get<Car[]>(newPath);
  }

  getCarById(id:number):Observable<Car>{
    let newPath = this.apiUrl + "/getbyid?id="+id
    return this.httpClient.get<Car>(newPath);
  }

  add(car:Car){
    let newPath = this.apiUrl + "/add"
    return this.httpClient.post(newPath,car);
  }

  update(car:Car){
    let newPath = this.apiUrl + "/update"
    return this.httpClient.post(newPath,car);
  }

}
