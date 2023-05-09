import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/userModel';
import { UserRolesModel } from 'src/app/models/userRoleModel';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userModel: UserModel;
  roleModel: UserRolesModel;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(
        (response) => {
          this.toastrService.success('Basariyla Giris Yapildi.');
          localStorage.setItem('token', response.token);
          localStorage.setItem('userName', this.loginForm.value.name);
        },
        (responseError) => {
          console.log(responseError);
          this.toastrService.error('Kullanici Adi veya Sifre Hatali!');
        }
      );
    }
  }

}
