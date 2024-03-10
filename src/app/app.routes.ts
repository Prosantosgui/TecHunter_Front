import { Routes } from '@angular/router';
import { RegisterComponent } from './src/app/modules/techunter/pages/register/register.component';
import { LandingPageComponent } from './src/app/modules/techunter/pages/landing-page/landing-page.component';
import { LoginComponent } from './src/app/modules/techunter/pages/login/login.component';
import { HomePageComponent } from './src/app/modules/techunter/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'register',
    title: 'TecHunter - Registro',
    component: RegisterComponent
  },
  {
    path: 'login',
    title: 'TecHunter - Login',
    component: LoginComponent
  },
  {
    path: 'home',
    title: "TecHunter - HOME",
    component: HomePageComponent
  }

];
