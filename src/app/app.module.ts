import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { RentComponent } from './components/rent/rent.component';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { LoginComponent } from './components/login/login.component';

import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from 'src/interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { UserControlComponent } from './components/user-control/user-control.component';
import { UserComponent } from './components/user/user.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { RentCategoryComponent } from './components/rent-category/rent-category.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    RentComponent,
    NaviComponent,
    CategoryComponent,
    CartSummaryComponent,
    LoginComponent,
    RegisterComponent,
    CarAddComponent,
    UserControlComponent,
    UserComponent,
    UserUpdateComponent,
    CarListComponent,
    CarUpdateComponent,
    RentCategoryComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-full-width"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
