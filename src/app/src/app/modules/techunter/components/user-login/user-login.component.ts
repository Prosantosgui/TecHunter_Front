import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from '../../interface/UserI';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {

  #apiService = inject(AuthService)
  #router = inject(Router)

  public submitForm(form: NgForm) {
    const userModel : UserI = {
      "login": form.value.inputEmail,
      "password": form.value.inputSenha
    };

    if(form.valid){
      this.#apiService.httpLoginUser(userModel).subscribe((res) =>{
        if(res.token){
          localStorage.setItem('UserToken', res.token)
          alert('Login Success!')
          this.#router.navigateByUrl('/home')
        }
        else{
          alert(res.message)
        }
      }
    )}
  }
}
