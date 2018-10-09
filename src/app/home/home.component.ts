import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Horta } from '../cadastro-horta/cadastroHorta.model';
import { HortaService } from '../cadastro-horta/cadastroHorta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private hortaService: HortaService) { }

  public horta: Horta[]

  public hortaMedia: Horta

  ngOnInit() {
    this.hortaService.getHortas().subscribe(
      (horta) => {
        this.horta = horta
      }
    )

  }

  handleCadastro(){
    this.router.navigate(['/cadastro'])
  }

  handleLogin(){
    this.router.navigate(['/login'])
  }

}
