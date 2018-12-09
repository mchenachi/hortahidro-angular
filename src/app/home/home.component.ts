import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Horta } from '../cadastro-horta/cadastroHorta.model';
import { HortaService } from '../cadastro-horta/cadastroHorta.service';
import { UsuarioService } from '../cadastro/cadastroUser.service';
import { CadastroUser } from '../cadastro/cadastroUser.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private router: Router,
    private usuarioService: UsuarioService) { }

  public usuarios: CadastroUser[]

  public hortaMedia: Horta[] = [
    {
      id: null,
      nome: "",
      cidade: "",
      temperatura: 0,
      solo: 0,
      ph: 0,
      nutrientes: "",
      clima: "",
      umidade: 0
    }
  ]

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios
        this.usuarios[3].hortas[0] = {
          id: 1,
          nome: "Alface",
          cidade: "Jundiai",
          temperatura: 12,
          solo: 15,
          ph: 4,
          nutrientes: "Potássio",
          clima: "equatorial",
          umidade: 12
        }
        this.usuarios[3].hortas[1] = {
          id: 1,
          nome: "Feijao",
          cidade: "Jundiai",
          temperatura: 17,
          solo: 19,
          ph: 4,
          nutrientes: "Ferro",
          clima: "arido",
          umidade: 12
        }
        this.usuarios[3].hortas[2] = {
          id: 1,
          nome: "Feijao",
          cidade: "Vinhedo",
          temperatura: 17,
          solo: 19,
          ph: 4,
          nutrientes: "Ferro",
          clima: "arido",
          umidade: 12
        }
        this.usuarios[3].hortas[3] = {
          id: 1,
          nome: "Arroz",
          cidade: "Vinhedo",
          temperatura: 10,
          solo: 3,
          ph: 9,
          nutrientes: "Carboidrato",
          clima: "seco",
          umidade: 13
        }

        if (this.usuarios[3].hortas.length > 1) {
          let count: number = 0
          for (let i = 1; i < this.usuarios[3].hortas.length; i++)
            if (this.usuarios[3].hortas[i - 1].cidade == this.usuarios[3].hortas[i].cidade) {
              let temperaturaMedia = (this.usuarios[3].hortas[i - 1].temperatura + this.usuarios[3].hortas[i].temperatura) / 2;
              let soloMedio = (this.usuarios[3].hortas[i - 1].solo + this.usuarios[3].hortas[i].solo) / 2;
              let phMedio = (this.usuarios[3].hortas[i - 1].ph + this.usuarios[3].hortas[i].ph) / 2;
              let umidadeMedia = (this.usuarios[3].hortas[i].umidade + this.usuarios[3].hortas[i].umidade) / 2;
              let nutrientes = this.usuarios[3].hortas[i - 1].nutrientes.concat(", ", this.usuarios[3].hortas[i].nutrientes)
              console.log(temperaturaMedia)
              this.hortaMedia[count] = {
                id: null,
                nome: "",
                cidade: this.usuarios[3].hortas[i].cidade,
                temperatura: temperaturaMedia,
                solo: soloMedio,
                ph: phMedio,
                nutrientes: nutrientes,
                clima: this.usuarios[3].hortas[i].clima,
                umidade: umidadeMedia
              }
              count++;
            }
        }
      }
    )

  }



  handleCadastro() {
    this.router.navigate(['/cadastro'])
  }

  handleLogin() {
    this.router.navigate(['/login'])
  }

}
