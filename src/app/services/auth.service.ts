import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:5280/api/users';

  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<TokenModel>(this.apiUrl + '/login', loginModel);
  }

  register(registerModel: RegisterModel) {
    return this.httpClient.post<TokenModel>(
      this.apiUrl + '/register',
      registerModel
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  autoLogOut(expirationDate:number){
    setTimeout(()=>{
      this.logOut();
    },expirationDate)
  }

  logOut(){
    if(localStorage.getItem('token')){
      localStorage.clear();
      return true;
    }else{
      return false;
    }
  }
}
