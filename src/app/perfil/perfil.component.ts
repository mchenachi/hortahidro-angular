import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material';
import { HortaService } from '../cadastro-horta/cadastroHorta.service';
import { Horta } from '../cadastro-horta/cadastroHorta.model';
import { UsuarioService } from '../cadastro/cadastroUser.service';
import { CadastroUser } from '../cadastro/cadastroUser.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public vetorHorta: Horta[]
  public usuarios: CadastroUser[]
  public length = 100;
  public pageSize = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private modalService: NgbModal) { }

  ngOnInit() {

    this.usuarioService.getUsuarios().subscribe(
      (res) => {
        console.log(res)
      }
    )
    this.usuarioService.getUser().subscribe(
      (resp) => {
        console.log(resp)
      }
    )

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
      }
    )

    this.updatePageParam(2)
  }

  updatePageParam(user) {
    //Atualiza o parâmetro da página na URL
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        ...this.route.snapshot.queryParams,
        usuario: user
      }
    })
  }

  handleCadastro() {
    this.router.navigate(['/cadastroHorta'])
  }

  handleLogout() {
    this.router.navigate(['/'])
  }

  openWindowCustomClass(info) {
    this.modalService.open(info, { windowClass: 'dark-modal', size: "lg" });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
