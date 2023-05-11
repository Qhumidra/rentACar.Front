import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

constructor(private authService:AuthService) {}
role = localStorage.getItem("role");


ngOnInit(): void {
let date = new Date().getTime();

 // this.authService.autoLogOut(+localStorage.getItem("expirationTimeOut") - date);
}


  isAuthenticate(){
   if(this.authService.isAuthenticated()) {
    return true;
   }
   else{
    return false
   }
  }
  logOut(){
    this.authService.logOut();
  }
}
