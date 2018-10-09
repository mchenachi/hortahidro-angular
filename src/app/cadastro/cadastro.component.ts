import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroUser } from './cadastroUser.model';
import { UsuarioService } from './cadastroUser.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private route: Router,
    private usuarioService: UsuarioService) { }

  public estados: any[] = [
    { nome: "", value: "" },
    { nome: "Acre", value: "AC" },
    { nome: "Alagoas", value: "AL" },
    { nome: "Amapá", value: "AP" },
    { nome: "Amazonas", value: "AM" },
    { nome: "Bahia", value: "BA" },
    { nome: "Ceará", value: "CE" },
    { nome: "Distrito Federal", value: "DF" },
    { nome: "Espírito Santo", value: "ES" },
    { nome: "Goiás", value: "GO" },
    { nome: "Maranhão", value: "MA" },
    { nome: "Mato Grosso", value: "MT" },
    { nome: "Mato Grosso do Sul", value: "MS" },
    { nome: "Minas Gerais", value: "MG" },
    { nome: "Pará", value: "PA" },
    { nome: "Paraíba", value: "PB" },
    { nome: "Paraná", value: "PR" },
    { nome: "Pernambuco", value: "PE" },
    { nome: "Piauí", value: "PI" },
    { nome: "Rio de Janeiro", value: "RJ" },
    { nome: "Rio Grande do Norte", value: "RN" },
    { nome: "Rio Grande do Sul", value: "RS" },
    { nome: "Rondônia", value: "RO" },
    { nome: "Roraima", value: "RR" },
    { nome: "Santa Catarina", value: "SC" },
    { nome: "São Paulo", value: "SP" },
    { nome: "Sergipe", value: "SE" },
    { nome: "Tocantins", value: "TO" }
  ]

  public usuario: CadastroUser = {
    id: null,
    nome: "",
    sobrenome: "",
    cpf: 0,
    email: "",
    senha: "",
    endereco: "",
    numero: 0,
    telefone: 0,
    cidade: "",
    estado: ""
  }



  ngOnInit() {
  }

  handleLogin() {
    this.route.navigate(['/login'])
  }

  handleSubmit() {
    this.usuarioService.postUsuario(this.usuario).subscribe(
      () => {
        console.log(this.usuario)
      }
    )
  }

}
