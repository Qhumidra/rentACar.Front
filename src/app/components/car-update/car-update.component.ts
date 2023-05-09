import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Category } from 'src/app/models/category';
import { CarService } from 'src/app/services/car.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  
  carUpdateForm: FormGroup;
  car:Car;
  categories:Category[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private categoryService:CategoryService
  ) {}

  ngOnInit(): void {
    this.updateCarForm();
    this.getCategories(); 
    this.getCarById();
  }

  updateCarForm() {
    this.carUpdateForm = this.formBuilder.group({
      id: [Number(localStorage.getItem("currentCarId"))],
      brand: [, Validators.required],
      model: [, Validators.required],
      categoryId: ['', ],
      age: [, Validators.required],
      price: [, Validators.required],
      imgPath: [, Validators.required],
    });
  }

  update(){
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      this.carService.update(carModel).subscribe((response) => {
        this.toastrService.success('Araba Guncellendi.', 'Basarili');
        localStorage.removeItem("currentCarId");
      });
    } else {
      this.toastrService.error('Formunuz Eksik Kalmis', 'Duzelt onu arabiqa');
    }
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  getCarById(){
    this.carService.getCarById(Number(localStorage.getItem("currentCarId"))).subscribe((response) => {
      this.car = response;
    });
  }
}
