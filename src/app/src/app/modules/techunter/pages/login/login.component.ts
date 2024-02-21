import { Component } from '@angular/core';
import { UserLoginComponent } from '../../components/user-login/user-login.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [UserLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
