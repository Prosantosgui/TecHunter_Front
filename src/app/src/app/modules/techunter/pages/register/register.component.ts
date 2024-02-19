import { Component } from '@angular/core';
import { UserRegisterComponent } from '../../components/user-register/user-register.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [UserRegisterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
