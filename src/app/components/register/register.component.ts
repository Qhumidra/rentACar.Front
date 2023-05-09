import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', Validators.required],
      verifyPassword: ['', Validators.required],
    });
  }
  register() {
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value);

      if (
        this.registerForm.value.password !=
        this.registerForm.value.verifyPassword
      ) {
        this.toastrService.error('Sifre Uyusmazligi!');
      } else {
        this.authService.register(registerModel).subscribe(
          (response) => {
            this.toastrService.success(
              'Basariyla Kayit Oldunuz. Lutfen Giris Yapiniz.'
            );
          },
          (responseError) => {
            console.log(responseError);
            this.toastrService.error('Hata');
          }
        );
      }
    }
  }
}
