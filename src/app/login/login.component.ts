import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../cadastro/cadastroUser.service';
import { CadastroUser } from '../cadastro/cadastroUser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuarios: CadastroUser[]
  public email: string
  public senha: string
  public errMsg: string
  public hasError: boolean = false

  constructor(private route: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios
      }
    )
  }

  handleCadastro() {
    this.route.navigate(['/cadastro'])
  }

  handleLogin() {
    let count: number = 0
    this.usuarios.forEach(element => {
      if (this.email === element.email && this.senha === element.senha) {
        this.route.navigate(['/perfil'])
      }
      else {
        count += 1
      }
    });

    if (count > 0) {
      this.hasError = true
      this.errMsg = "Falha ao logar. Usuário/senha inválidos ou não cadastrados."
    }
  }

}
