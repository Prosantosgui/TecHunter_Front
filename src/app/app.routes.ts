import { Routes } from '@angular/router';
import { RegisterComponent } from './src/app/modules/techunter/pages/register/register.component';
import { LandingPageComponent } from './src/app/modules/techunter/pages/landing-page/landing-page.component';
import { LoginComponent } from './src/app/modules/techunter/pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];
