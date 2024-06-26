import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { AuthGuard } from './auth.guard';
import { SuccessComponent } from './components/success/success.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { MyRentalsComponent } from './components/my-rentals/my-rentals.component';
import { AdminCarsComponent } from './components/admin-cars/admin-cars.component';
import { AdminRentalsComponent } from './components/admin-rentals/admin-rentals.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars', component: CarsComponent, canActivate: [AuthGuard] },
  { path: 'car/:id', component: CarDetailsComponent, canActivate: [AuthGuard] },
  { path: 'success', component: SuccessComponent, canActivate: [AuthGuard] },
  { path: 'cancel', component: CancelComponent, canActivate: [AuthGuard] },
  { path: 'my-rentals', component: MyRentalsComponent, canActivate: [AuthGuard] },
  { path: 'admin/cars', component: AdminCarsComponent, canActivate: [AuthGuard] },
  { path: 'admin/rentals', component: AdminRentalsComponent, canActivate: [AuthGuard] },
  { path: 'admin/users', component: AdminUsersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
