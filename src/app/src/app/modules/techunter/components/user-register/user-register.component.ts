import { UserRegisterI } from './../../interface/UserI';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {

  #router = inject(Router)
  #apiService = inject(AuthService);

  public submitForm(form: NgForm) {
    const userModel : UserRegisterI = {
      "login": form.value.inputEmail,
      "password": form.value.inputSenha,
      "role": form.value.radioPerfil
    };

    if(form.valid && form.value.inputSenha == form.value.inputConfirmaSenha){

      this.#apiService.httpRegisterUser(userModel).subscribe({
        next: () => {
          alert("Conta criada com sucesso!");
          this.#router.navigateByUrl('/login');
        },
        error: (error) => {
          alert("Não foi possível criar a conta!");
          console.log(error);
        }
      })
    }
  }
}

