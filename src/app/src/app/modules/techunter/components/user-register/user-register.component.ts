import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {

  public submitForm(form: NgForm) {
    console.log(form.value);
  }
}
