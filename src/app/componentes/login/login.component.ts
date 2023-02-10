import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  erros: string[];
  loginError: boolean;

  constructor(
    private router: Router,
    private authService: AutenticacaoService
  ) {
    this.username = '';
    this.password = '';
    this.erros = [];
    this.loginError = false;
  }


  onSubmit() {
    this.logar();
  }

  logar() {
    this.authService
      .obterToken(this.username, this.password)
      .subscribe({
        next: (response) => {
          console.log(response),
            this.loginError = false;
          this.erros = [];
          const token = JSON.stringify(response);
          localStorage.setItem('token', token);
          this.router.navigate(['/home/inicio'])
        },
        error: (errorResponse) => {
          const status = errorResponse.status;
          const msgErro = errorResponse.message;
          this.loginError = true;
          if (status == 0) {
            const infoErr = 'STATUS: (' + status + ") " + msgErro;
            this.erros = [infoErr];
          } else {
            this.erros = [errorResponse.error.error_description];
          }
        }
      });
  }


}
