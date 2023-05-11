import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastRef, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('role') == "Employee" || localStorage.getItem('role') == "Admin" && this.authService.isAuthenticated()) {
        return true;  
    } else {
        this.router.navigate(['/errorPage']);
        return false;
    }
  }
}
