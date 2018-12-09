import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../cadastro/cadastroUser.service';
import { CadastroUser } from '../cadastro/cadastroUser.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string

  public usuario: object = {
    email: "",
    senha: ""
  }
  public errMsg: string
  public hasError: boolean = false
  headers: string[];

  constructor(private route: Router,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  handleCadastro() {
    this.route.navigate(['/cadastro'])
  }

  handleLogin() {
    this.loginService.postUser(this.usuario).subscribe(
      (resp) => {
        this.email = resp.body
        this.route.navigate(['/perfil'])
      }
    )
  }

  handleLoginGoogle() {
    this.loginService.postUserGoogle(this.usuario).subscribe(
      () => {
        this.route.navigate(['/perfil'])
      }
    )
  }

}
