import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByCategory(params['id']);
      } else {
        this.getCars();
      }
    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response;
      this.dataLoaded = true;
    });
  }
  getCarsByCategory(categoryId: number) {
    this.carService.getCarsByCategory(categoryId).subscribe((response) => {
      this.cars = response;
      this.dataLoaded = true;
    });
  }

  addToCart(car: Car) {
    this.cartService.addToCart(car);
  }
}
