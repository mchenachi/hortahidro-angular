import { Component, OnInit } from '@angular/core';
import { Horta } from './cadastroHorta.model';
import { HortaService } from './cadastroHorta.service';
import { UsuarioService } from '../cadastro/cadastroUser.service';

@Component({
  selector: 'app-cadastro-horta',
  templateUrl: './cadastro-horta.component.html',
  styleUrls: ['./cadastro-horta.component.css']
})
export class CadastroHortaComponent implements OnInit {

  public horta: Horta =
    {
      id: null,
      idUser: 0,
      nome: "",
      cidade: "",
      temperatura: 20,
      solo: 30,
      ph: 7,
      nutrientes: "potássio",
      clima: "equatorial",
      umidade: 10
    }

  constructor(private hortaService: HortaService,
    private cadastroService: UsuarioService) { }

  ngOnInit() {
  }

  handleSubmit() {
    this.hortaService.postHortas(this.horta).subscribe(
      () => {
        console.log(this.horta)
      }
    )
  }

}
