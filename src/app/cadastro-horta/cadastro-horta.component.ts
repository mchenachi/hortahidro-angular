import { Component, OnInit } from '@angular/core';
import { Horta } from './cadastroHorta.model';
import { HortaService } from './cadastroHorta.service';
import { UsuarioService } from '../cadastro/cadastroUser.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro-horta',
  templateUrl: './cadastro-horta.component.html',
  styleUrls: ['./cadastro-horta.component.css']
})
export class CadastroHortaComponent implements OnInit {

  public horta: Horta

  constructor(private hortaService: HortaService,
    private cadastroService: UsuarioService,
    private modalService: NgbModal) { }

  ngOnInit() {
  }

  handleSubmit(modal) {
    this.hortaService.postHortas(this.horta).subscribe(
      () => {
        this.modalService.open(modal, { windowClass: 'dark-modal', size: "lg" });
      }
    )
  }

}
