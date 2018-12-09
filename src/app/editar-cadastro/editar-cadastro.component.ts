import { Component, OnInit } from '@angular/core';
import { CadastroUser } from '../cadastro/cadastroUser.model';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.css']
})
export class EditarCadastroComponent implements OnInit {

  constructor() { }

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
    estado: "",
    hortas: []
  }

  ngOnInit() {
  }

}
