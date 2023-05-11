import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

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
    private cartService: CartService,
    private userService:UserService
  ) {
    this.userService.getUser(localStorage.getItem("userName")).subscribe((response)=>{
      localStorage.setItem("userId",response.id.toString());
    });
  }

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
    localStorage.setItem("carId",car.id.toString());
    localStorage.setItem("carPrice",car.price.toString());
    this.cartService.addToCart(car);
  }
}
