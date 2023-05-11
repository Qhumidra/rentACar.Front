import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { RentComponent } from './components/rent/rent.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticatedLoginGuard } from './guards/authenticatedLogin.guard';
import { CarAddComponent } from './components/car-add/car-add.component';
import { UserComponent } from './components/user/user.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { AdminAuthGuard } from './guards/adminAuth.guard';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  {path:"login",component:LoginComponent,canActivate:[AuthenticatedLoginGuard]},
  {path:"register",component:RegisterComponent,canActivate:[AuthenticatedLoginGuard]},
  {path:"user-detail",component:UserComponent,canActivate:[LoginGuard]},
  {path:"user-update",component:UserUpdateComponent,canActivate:[LoginGuard]},
  {path:"rented/:id",component:RentComponent,canActivate:[AdminAuthGuard]},
  {path:"cars/rent",component:CartSummaryComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/add", component:CarAddComponent,canActivate:[AdminAuthGuard]},
  {path:"cars/update", component:CarUpdateComponent,canActivate:[AdminAuthGuard]},
  {path:"cars/list", component:CarListComponent, canActivate:[AdminAuthGuard]},
  {path:"cars/category/:id",component:CarComponent},
  {path:"errorPage",component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
