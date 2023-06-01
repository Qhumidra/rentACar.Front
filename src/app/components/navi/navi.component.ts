import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  adminLogged: any;
  customerLogged: any;
  employeeLogged: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.onLogin(localStorage.getItem("role"))
    console.log(localStorage.getItem("role"))
    //auto logOut
    let date = new Date().getTime();
    let expirationDate = new Date(
      localStorage.getItem('expirationTimeOut')
    ).getTime();
    this.authService.autoLogOut(expirationDate - date);
    //
  }
  
  onLogin(userrLogged: string) {
    this.adminLogged = false;
    this.customerLogged = false;
    this.employeeLogged = false;
    switch (userrLogged) {
      case 'Admin':
        this.adminLogged = true;
        break;
      case 'Customer':
        this.customerLogged = true;
        break;
      case 'Employee':
        this.employeeLogged = true;
        break;
    }
  }

  isAuthenticate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    window.location.reload();
    this.authService.logOut();
  }
}
