import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;

  constructor(
    private carService: CarService,
  ) {}
  
  ngOnInit(): void {

    this.getCars();
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response;
      this.dataLoaded = true;
    });
  }
  getCurrentCar(car: Car) {
    localStorage.setItem('currentCarId', car.id.toString());
  }
}
