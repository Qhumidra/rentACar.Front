import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
  export class UserUpdateComponent implements OnInit {
    userUpdateForm: FormGroup;
    constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
      private toastrService: ToastrService
    ) {}
  
    ngOnInit(): void {
      this.updateUserUpdateForm();
    }
  
    updateUserUpdateForm() {
      this.userUpdateForm = this.formBuilder.group({
        currentName: [localStorage.getItem("userName")],
        name: [],
        surname: [ ],
        password: [],
        sokak: [],
        mahalle: [],
        ilce: [],
        il: [],
        adresNotu: [],
      });
    }
  
    update() {
      if (this.userUpdateForm.valid) {
        let userModel = Object.assign({}, this.userUpdateForm.value);
        this.userService.updateUser(userModel).subscribe((response) => {
          this.toastrService.success(
            'Kullanici Bilgileriniz Basariyla Guncellendi.',
            'Basarili'
          );
          localStorage.removeItem("userName");
          localStorage.setItem("userName",this.userUpdateForm.value.name);
        });
      } else {
        this.toastrService.error('Formunuz Eksik Kalmis', 'Duzelt onu arabiqa');
      }
    }
  }
  