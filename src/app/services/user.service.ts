import { Injectable } from '@angular/core';
import { UserModel } from '../models/userModel';
import { HttpClient } from '@angular/common/http';
import { UserUpdateModel } from '../models/userUpdateModel';
import { Observable } from 'rxjs';
import { UserRolesModel } from '../models/userRoleModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:5280/api/users';
  
  constructor(private httpClient: HttpClient) {}

  getUser(userName: string): Observable<UserModel> {
    return this.httpClient.get<UserModel>(
      this.apiUrl + '/getbyname?name=' + userName
    );
  }


  updateUser(userUpdateModel: UserUpdateModel) {
    return this.httpClient.post(this.apiUrl + '/updateuser', userUpdateModel);
  }
}
