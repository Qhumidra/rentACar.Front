import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartAddForm:FormGroup;
  cartItem: CartItem;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,

  ) {}

  ngOnInit(): void {
    this.createRentAddForm();
    this.getCart();

  }


  createRentAddForm(){
    this.cartAddForm = this.formBuilder.group({
      appUserId: [localStorage.getItem("userId")],
      carId: [localStorage.getItem("carId")],
      paymentType: [],
      price: [Number(localStorage.getItem("carPrice"))],
      issueDate: [],
      purchaseDate: [],
      statusId:[1]

    })
  }

  add(){
    if (this.cartAddForm.valid) {
      let carModel = Object.assign({}, this.cartAddForm.value);
      console.log(carModel.appUserId);
      this.cartService.add(carModel).subscribe((response) => {
        this.toastrService.success('Araba Eklendi.', 'Basarili');
      });
    }
   else {
    this.toastrService.error('Formunuz Eksik Kalmis', 'Duzelt onu arabiqa');
  }
  }

  getCart() {
    this.cartItem = this.cartService.list();
  }
}
