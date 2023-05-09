import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CarService } from 'src/app/services/car.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  categories : Category[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private categoryService : CategoryService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getCategories();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      categoryId: ['', ],
      age: ['', Validators.required],
      price: ['', Validators.required],
      imgPath: ['', Validators.required],
    });
  }
  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      console.log(this.carAddForm.value.categoryId);
      this.carService.add(carModel).subscribe((response) => {
        this.toastrService.success('Araba Eklendi.', 'Basarili');
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

}
