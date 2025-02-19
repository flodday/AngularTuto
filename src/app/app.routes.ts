import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {authenticationGuard} from './login/authentication.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  }
];
