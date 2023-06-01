import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartAddForm: FormGroup;
  cartItem: CartItem;
  calculatedPrice: number  = 0;
  isVisible:boolean = false;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {

    this.createRentAddForm();
    this.getCart();
  }

  createRentAddForm() {
    this.cartAddForm = this.formBuilder.group({
      appUserId: [sessionStorage.getItem('userId')],
      carId: [sessionStorage.getItem('carId')],
      paymentType: [, Validators.required],
      price: [Number(sessionStorage.getItem('carPrice'))],
      issueDate: [, Validators.required],
      purchaseDate: [, Validators.required],
      statusId: [1],
    });
  }

  add() {
    let carModel = Object.assign({}, this.cartAddForm.value);

    this.cartService.add(carModel).subscribe((response) => {
      this.toastrService.success('Araba Eklendi.', 'Basarili');
    });
    this.isVisible = false;
    sessionStorage.clear();
  }

  calculatePrice() {
    if (this.cartAddForm.valid) {
      this.calculatedPrice =
        ((new Date(this.cartAddForm.value.purchaseDate).getTime() -
          new Date(this.cartAddForm.value.issueDate).getTime()) /
          (1000 * 3600 * 24)) *
        this.cartAddForm.value.price;
      this.cartAddForm.value.price = this.calculatedPrice;
      this.isVisible = true;
    } else {
      this.toastrService.error('Formunuz Eksik Kalmis', 'Duzelt onu arabiqa');
      this.isVisible = false;
    }
  }
 

  getCart() {
    this.cartItem = this.cartService.list();
  }
}
