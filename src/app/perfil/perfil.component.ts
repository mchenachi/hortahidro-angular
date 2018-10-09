import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HortaService } from '../cadastro-horta/cadastroHorta.service';
import { Horta } from '../cadastro-horta/cadastroHorta.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public vetorHorta: Horta[]

  constructor(private route: Router,
    private hortaService: HortaService) { }

  ngOnInit() {
    this.hortaService.getHortas().subscribe(
      (hortas) => {
        this.vetorHorta = hortas
      }
    )
  }

  handleCadastro(){
    this.route.navigate(['/cadastroHorta'])
  }

  handleLogout(){
    this.route.navigate(['/'])
  }

}
