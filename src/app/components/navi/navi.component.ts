import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent {

constructor(private authService:AuthService) {}

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
