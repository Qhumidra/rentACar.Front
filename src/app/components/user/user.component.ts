import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: UserModel;
  
  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
  }

  get() {
      this.userService
      .getUser(localStorage.getItem('userName'))
      .subscribe((response) => {        
        this.user = response;
      });
  }
}
